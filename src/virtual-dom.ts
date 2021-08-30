import { Html, VirtualNode, VirtualText, Props } from "./types";

// HELPERS

const doc: Document = document;

export const createTextNode = (text: string): VirtualText => {
  return {
    $: "TEXT",
    __text: text,
  };
};

export const createNodeNS =
  (namespace: string | undefined) =>
  (
    tag: string,
    { props, children }: { props?: Props; children?: Html[] } = {}
  ): VirtualNode => {
    return {
      $: "NODE",
      __tag: tag,
      __props: props ? props : {},
      __childrens: children ? children : [],
      __namespace: namespace,
    };
  };

export const createNode = createNodeNS(undefined);

// RENDERING
export const render = (vDOM: Html): Text | Element => {
  if (vDOM.$ === "TEXT") {
    const vText = vDOM as VirtualText;
    return doc.createTextNode(vText.__text);
  }
  const vNode = vDOM as VirtualNode;
  // tags
  const _el = vNode.__namespace
    ? doc.createElementNS(vNode.__namespace, vNode.__tag)
    : doc.createElement(vNode.__tag);

  // props
  for (const [k, v] of Object.entries(vNode.__props)) _el.setAttribute(k, v);

  // kids
  for (const kid of vNode.__childrens) {
    const kids = render(kid);
    _el.appendChild(kids);
  }

  return _el;
};

export const virtualize = (node: Element): Html => {
  // TEXT
  if (node.nodeType === 3) {
    const text = node.textContent;
    return text ? createTextNode(text) : createTextNode("");
  }

  // UNKNOWN
  if (node.nodeType !== 1) return createTextNode("");

  // NODE
  let props: Props = {};

  const tag = node.tagName.toLowerCase();
  let children: Html[] = [];
  let childNodes = node.children;
  for (let i = 0; i < childNodes.length; i++) {
    const child = virtualize(childNodes[i]);
    children.push(child);
  }

  return createNode(tag, { props, children });
};
