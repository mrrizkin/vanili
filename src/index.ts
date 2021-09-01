import { VaniliDocument } from "./types";
import { diff, createNode, virtualize } from "./virtual-dom";

export default {
  document: <Model>(app: VaniliDocument<Model>) => {
    return initialize(app.init, function (initialModel) {
      const view = app.view;
      let title = document.title;
      let bodyNode = document.body;
      let currNode = virtualize(bodyNode);
      return makeAnimator(initialModel, function (model: Model) {
        let doc = view(model);
        let nextNode = createNode("body", { children: [doc.body] });
        let patches = diff(currNode, nextNode);
        console.log(patches);
        title !== doc.title && (document.title = title = doc.title);
      });
    });
  },
};

function initialize<Model>(
  init: (a: string) => Model,
  stepper: (b: Model) => () => void
) {
  const model = init("hello");
  stepper(model)();
}

function makeAnimator<Model>(model: Model, draw: (x: Model) => void) {
  draw(model);
  return function () {};
}
