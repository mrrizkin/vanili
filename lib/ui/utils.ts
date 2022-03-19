import { createNode, createTextNode } from "../virtual-dom";
import { Html, Node } from "../virtual-dom/types";

export const node = createNode;
export const text = createTextNode;

export function kids(children: (string | Node)[]): Html[] {
	return children.map(function (child) {
		return typeof child === "string" ? text(child) : child;
	});
}
