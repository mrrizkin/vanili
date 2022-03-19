import { Html, Node, Text, Props } from "./types";

// HELPERS

const doc: Document = document;

export function createTextNode(text: string): Text {
	return {
		$: "TEXT",
		__text: text
	};
}

export function createNodeNS(namespace: string | undefined) {
	return function (
		tag: string,
		{ props, children }: { props?: Props[]; children?: Html[] } = {}
	): Node {
		return {
			$: "NODE",
			__tag: tag,
			__props: props ? props : [],
			__childrens: children ? children : [],
			__namespace: namespace
		};
	};
}

export const createNode = createNodeNS(undefined);

// RENDERING
export function render(vDOM: Html) {
	// Text
	if (vDOM.$ === "TEXT") {
		const vText = vDOM as Text;
		return doc.createTextNode(vText.__text);
	}

	// Node
	const vNode = vDOM as Node;

	// tags
	const _el = vNode.__namespace
		? doc.createElementNS(vNode.__namespace, vNode.__tag)
		: doc.createElement(vNode.__tag);

	// props
	for (const [key, value] of vNode.__props) {
		_el.setAttribute(key, value);
	}

	// kids
	for (const kid of vNode.__childrens) {
		const kids = render(kid);
		_el.appendChild(kids);
	}

	return _el;
}

export function virtualize(node: Element): Html {
	// TEXT
	if (node.nodeType === 3) {
		const text = node.textContent;
		if (text) return createTextNode(text.trim());
		return createTextNode("");
	}

	// UNKNOWN
	if (node.nodeType !== 1) return createTextNode("");

	// NODE

	// Attribute
	let newProps: Props[] = [];
	let attributes = node.attributes;
	for (var i = attributes.length; i--; ) {
		var attr = attributes[i];
		var name = attr.name;
		var value = attr.value;
		newProps.push([name, value]);
	}

	// Tags
	const newTag = node.tagName.toLowerCase();
	let newChildren: Html[] = [];
	let newChildNodes = node.childNodes;
	for (let i = 0; i < newChildNodes.length; i++) {
		// @ts-ignore: trust me it works
		const child = virtualize(newChildNodes[i]);
		newChildren.push(child);
	}

	return createNode(newTag, { props: newProps, children: newChildren });
}
