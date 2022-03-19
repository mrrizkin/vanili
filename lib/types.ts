import { Html } from "./virtual-dom/types";

export type HtmlDocument = {
	title: string;
	body: Html[];
};

export type VaniliDocument<Model, Flags> = {
	view: (model: Model) => HtmlDocument;
	init: (flags: Flags) => Model;
	update: (model: Model) => Model;
	subscription: (model: Model) => Model;
};
