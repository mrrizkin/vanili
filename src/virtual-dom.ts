import { NodeType, Html, Node, Text, Props } from './types'

// HELPERS

const doc: Document = document

export function createTextNode(text: string): Text {
	return {
		$: 'TEXT',
		__text: text
	}
}

export function createNodeNS(namespace: string | undefined) {
	return function (
		tag: string,
		{ props, children }: { props?: Props; children?: Html[] } = {}
	): Node {
		return {
			$: 'NODE',
			__tag: tag,
			__props: props ? props : {},
			__childrens: children ? children : [],
			__namespace: namespace
		}
	}
}

export const createNode = createNodeNS(undefined)

// DIFFING

function pushPatch(patches: any[], type: NodeType, index: number, data: Html) {
	const patch = {
		$: type,
		__index: index,
		__data: data,
		__domNode: undefined,
		__eventNode: undefined
	}

	patches.push(patch)
	return patch
}

export function diff(oldNode: Html, newNode: Html) {
	let patches: any[] = []
	if (oldNode === newNode) return

	const oldNodeType = oldNode.$
	const newNodeType = newNode.$

	if (oldNodeType !== newNodeType) pushPatch(patches, newNodeType, 0, newNode)

	// node type is the same
	switch (newNodeType) {
		case 'NODE':
			diffNode(oldNode as Node, newNode as Node, patches, 0)
			break
		case 'TEXT':
			break
		default:
			break
	}

	return patches
}

function diffNode(oldNode: Node, newNode: Node, patches: any[], index: number) {
	if (oldNode.__tag !== newNode.__tag || oldNode.__namespace !== newNode.__namespace) {
		pushPatch(patches, 'NODE', index, newNode)
		return
	}
	console.log('diffNode: rearched')
	diffKids(oldNode, newNode, patches, index)
}

function diffKids(oldParents: Node, newParents: Node, _patches: any[], _index: number) {
	const oldKids = oldParents.__childrens
	const newKids = newParents.__childrens

	const oldKidsLength = oldKids.length
	const newKidsLength = newKids.length

	if (oldKidsLength > newKidsLength) {
		// remove
	} else if (oldKidsLength < newKidsLength) {
		// add
	}

	for (
		let minLength = oldKidsLength < newKidsLength ? oldKidsLength : newKidsLength,
			i = 0;
		i < minLength;
		i++
	) {
		let oldKid = oldKids[i]
		console.log('oldKid:', oldKid)
		// do diffing again
		// append index with kids descendant Count
	}

	return
}

// RENDERING
export function render(vDOM: Html) {
	if (vDOM.$ === 'TEXT') {
		const vText = vDOM as Text
		return doc.createTextNode(vText.__text)
	}
	const vNode = vDOM as Node
	// tags
	const _el = vNode.__namespace
		? doc.createElementNS(vNode.__namespace, vNode.__tag)
		: doc.createElement(vNode.__tag)

	// props
	for (const [k, v] of Object.entries(vNode.__props)) _el.setAttribute(k, v)

	// kids
	for (const kid of vNode.__childrens) {
		const kids = render(kid)
		_el.appendChild(kids)
	}

	return _el
}

export function virtualize(node: Element): Html {
	// TEXT
	if (node.nodeType === 3) {
		const text = node.textContent
		return text ? createTextNode(text) : createTextNode('')
	}

	// UNKNOWN
	if (node.nodeType !== 1) return createTextNode('')

	// NODE
	let props: Props = {}

	const tag = node.tagName.toLowerCase()
	let children: Html[] = []
	let childNodes = node.children
	for (let i = 0; i < childNodes.length; i++) {
		const child = virtualize(childNodes[i])
		children.push(child)
	}

	return createNode(tag, { props, children })
}
