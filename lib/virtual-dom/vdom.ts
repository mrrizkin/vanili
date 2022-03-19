import { Event, Prop, Html, Node, Text } from "./types";

const doc: Document = document;

export function createTextNode(text: string): Text {
	return {
		type: "TEXT",
		text: text
	};
}

export function createNodeNS(ns?: string) {
	return function (
		tag: string,
		props: Prop[] = [],
		kids: Html[] = [],
		events: Event[]
	): Node {
		return {
			type: "NODE",
			ns: ns,
			tag: tag,
			events: events,
			props: props,
			kids: kids
		};
	};
}

export const createNode = createNodeNS();

export function render(vdom: Html) {
	if (vdom.type === "TEXT") {
		return doc.createTextNode((vdom as Text).text);
	}

	const vnode = vdom as Node;

	const el = vnode.ns
		? doc.createElementNS(vnode.ns, vnode.tag)
		: doc.createElement(vnode.tag);

	for (const [k, v] of vnode.props) {
		el.setAttribute(k, v);
	}

	for (const kid of vnode.kids) {
		const kids = render(kid);
		el.appendChild(kids);
	}

	for (const [eventName, handler] of vnode.events) {
		el.addEventListener(eventName, handler);
	}

	return el;
}

export function virtualize(node: Element): Html {
	if (node.nodeType === 3) {
		const text = node.textContent;
		if (text) return createTextNode(text.trim());
		return createTextNode("");
	}

	if (node.nodeType !== 1) return createTextNode("");

	let props = [];
	let attrs = node.attributes;
	for (let i = attrs.length; i--; ) {
		let k = attrs[i].name;
		let v = attrs[i].value;
		props.push([k, v]);
	}

	const tag = node.tagName.toLowerCase();
	let kids = [];
	let kidNodes = node.childNodes;
	for (let i = 0; i < kidNodes.length; i++) {
		// @ts-ignore: trust me it works
		const kid = virtualize(kidNodes[i]);
		kids.push(kid);
	}

	return createNode(tag, props, kids, []);
}
