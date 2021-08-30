import { HTMLDocument } from "./types";
import { render } from "./virtual-dom";

type App<Model> = {
  init: () => Model;
  view: (model: Model) => HTMLDocument;
  update: (model: Model) => Model;
};

export default {
  main: <Model>(app: App<Model>) => {
    const model = app.init();
    const view = app.view(model);
    return {
      init: ({ root }: { root: HTMLElement }) => {
        const el = render(view.body);
        document.title = view.title;
        root.replaceWith(el);
        runtime(model, (model: Model) => {
          console.log("Model:", model);
        });
      },
    };
  },
};

// TODO: make lazy as posible
const runtime = <Model>(model: Model, update: (model: Model) => void) => {
  console.log("runtime 🏃");
  update(model);
};
