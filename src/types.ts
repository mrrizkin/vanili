export type Props = {
  [key: string]: string;
};

export type NodeType = "NODE" | "TEXT";

export type VirtualNode = {
  $: NodeType;
  __tag: string;
  __props: Props;
  __childrens: Html[];
  __namespace?: string;
};

export type VirtualText = {
  $: NodeType;
  __text: string;
};

export type Html = VirtualNode | VirtualText;

export type HTMLDocument = {
  title: string;
  body: Html;
};

type Hook<Msg> = () => Msg;

export type VaniliDocument<Model, Msg> = {
  view: (model: Model) => HTMLDocument;
  init: (flags: string) => [Model, Hook<Msg>];
  update: (msg: Msg, model: Model) => [Model, Hook<Msg>];
  subscription: (msg: Msg, model: Model) => [Model, Hook<Msg>];
};
