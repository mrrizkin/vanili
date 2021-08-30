import Vanili from "../../../src/";
import { createNode, createTextNode } from "../../../src/virtual-dom";
import { HTMLDocument, Html } from "../../../src/types";

type Model = {
  count: number;
};

const view = (model: Model): HTMLDocument => {
  const count = String(model.count);
  return {
    title: "Test",
    body: createNode("div", {
      props: { class: "container", id: "root" },
      children: [header(), createTextNode("Count: " + count)],
    }),
  };
};

const header = (): Html => {
  return createNode("header", {
    props: { class: "header" },
    children: [createTextNode("Hello")],
  });
};

const init = (): Model => {
  return {
    count: 0,
  };
};

const update = (model: Model): Model => {
  return {
    count: model.count + 1,
  };
};

const app = Vanili.main({ init, view, update });
app.init({ root: document.getElementById("root") });
