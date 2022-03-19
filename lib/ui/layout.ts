import { Prop, Node, Event } from "../virtual-dom/types";
import { kids, node } from "./utils";

export function el(
	{
		attrs = [],
		tag = "div",
		events = []
	}: { attrs?: Prop[]; tag?: string; events?: Event[] },
	children?: string | Node
) {
	return node(tag, attrs, children ? kids([children]) : [], events);
}

export function column(
	{
		attrs = [],
		tag = "div",
		events = []
	}: { attrs?: Prop[]; tag?: string; events?: Event[] },
	...children: (string | Node)[]
) {
	return node(tag, [["class", "col"], ...attrs], kids(children), events);
}

export function row(
	{
		attrs = [],
		tag = "div",
		events = []
	}: { attrs?: Prop[]; tag?: string; events?: Event[] },
	...children: (string | Node)[]
) {
	return node(tag, [["class", "row"], ...attrs], kids(children), events);
}

export function p(
	{
		attrs = [],
		tag = "p",
		events = []
	}: { attrs?: Prop[]; tag?: string; events?: Event[] },
	...children: (string | Node)[]
) {
	return node(tag, attrs, kids(children), events);
}

export function link(
	{
		attrs = [],
		tag = "a",
		events = []
	}: { attrs?: Prop[]; tag?: string; events?: Event[] },
	...children: (string | Node)[]
) {
	return node(tag, attrs, kids(children), events);
}
