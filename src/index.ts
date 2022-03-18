import { VaniliDocument } from './types'
import { createNode, render, virtualize } from './virtual-dom'

type Args<Flags> = {
	flags: Flags
	node?: HTMLElement
}

export default {
	document: <Model, Flags>(app: VaniliDocument<Model, Flags>) => {
		return function (args: Args<Flags>) {
			return initialize(app.init, args, function (initialModel) {
				const view = app.view
				let title = document.title
				let bodyNode = document.body
				let currNode = virtualize(bodyNode)
				return makeAnimator(initialModel, function (model: Model) {
					let doc = view(model)
					let nextNode = createNode('body', { children: doc.body })
					// todo: make diffing work please
					bodyNode.replaceWith(render(nextNode))
					title !== doc.title && (document.title = title = doc.title)
				})
			})
		}
	}
}

function initialize<Model, Flags>(
	init: (a: Flags) => Model,
	args: Args<Flags>,
	stepper: (b: Model) => () => void
) {
	const model = init(args.flags)
	stepper(model)()
}

function makeAnimator<Model>(model: Model, draw: (x: Model) => void) {
	draw(model)
	return function () {}
}
