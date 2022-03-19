import Vanili from "../../lib";
import { HtmlDocument } from "../../lib/types";
import { column, row, el, p, link } from "../../lib/ui/layout";

type Model = {
	count: number;
};

function view(model: Model): HtmlDocument {
	return {
		title: "Test Vanili",
		body: [
			column(
				{},
				el(
					{
						tag: "button",
						events: [["click", () => console.log(model.count++)]]
					},
					"click"
				),
				el(
					{
						tag: "button",
						events: [["click", () => console.log(model.count)]]
					},
					"newButton"
				),
				model.count.toString()
			)
		]
	};
}

function init(flags: string): Model {
	console.log("flags:", flags);
	return {
		count: 0
	};
}

function update(model: Model): Model {
	return {
		count: model.count + 1
	};
}

function subscription(model: Model): Model {
	return model;
}

const app = Vanili.document({ init, view, update, subscription });

app({ flags: "hello" });
