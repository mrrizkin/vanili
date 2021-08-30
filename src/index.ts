import { HTMLDocument } from "./types";
import { createNode, virtualize } from "./virtual-dom";

type App<Model> = {
  init: () => Model;
  view: (model: Model) => HTMLDocument;
  update: (model: Model) => Model;
};

export default {
  main: <Model>(app: App<Model>) => {
    return initialize(app.init, app.update, (_sendToApp, initalModel) => {
      let view = app.view;
      let title = document.title;
      let bodyNode = document.body;
      let currNode = virtualize(bodyNode);
      return _Browser_makeAnimator(initalModel, (model: Model) => {
        console.log("Model:", model);
        let doc = view(model);
        let nextNode = createNode("body", { children: [doc.body] });
        currNode = nextNode;
        title !== doc.title && (document.title = title = doc.title);
      });
    });
  },
};

const initialize = <Model>(
  init: () => Model,
  update: (model: Model) => Model,
  stepperBuilder: (
    sendToApp: (viewMetadata: () => any) => void,
    model: Model
  ) => (model: Model, viewMetadata: any) => void
) => {
  const sendToApp = (viewMetadata: () => any) => {
    const pair = update(model);
    stepper((model = pair), viewMetadata);
  };

  const initPair = init();
  let model = initPair;
  const stepper = stepperBuilder(sendToApp, model);

  return {};
};

const _Browser_cancelAnimationFrame =
  typeof cancelAnimationFrame !== "undefined"
    ? cancelAnimationFrame
    : function (id: number) {
        clearTimeout(id);
      };

const _Browser_requestAnimationFrame =
  typeof requestAnimationFrame !== "undefined"
    ? requestAnimationFrame
    : (callback: () => void) => {
        return setTimeout(callback, 1000 / 60);
      };

type State = "NO_REQUEST" | "EXTRA_REQUEST" | "PENDING_REQUEST";

const _Browser_makeAnimator = <Model>(
  model: Model,
  draw: (model: Model) => void
) => {
  draw(model);

  let state: State = "NO_REQUEST";

  const updateIfNeeded = () => {
    state =
      state === "EXTRA_REQUEST"
        ? "NO_REQUEST"
        : (_Browser_requestAnimationFrame(updateIfNeeded),
          draw(model),
          "EXTRA_REQUEST");
  };

  return (nextModel: Model, isSync: any) => {
    model = nextModel;
    isSync
      ? (draw(model), state === "PENDING_REQUEST" && (state = "EXTRA_REQUEST"))
      : (state === "EXTRA_REQUEST" &&
          _Browser_requestAnimationFrame(updateIfNeeded),
        (state = "PENDING_REQUEST"));
  };
};
