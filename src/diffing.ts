import { NodeType, Html, Node } from './types'
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
