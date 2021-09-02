import Vanili from '../../../src/'
import { createNode, createTextNode } from '../../../src/virtual-dom'
import { Html, HtmlDocument } from '../../../src/types'

type Model = {
	count: number
}

function view(model: Model): HtmlDocument {
	const count = String(model.count)
	return {
		title: 'Test',
		body: createNode('div', {
			props: { class: 'container', id: 'root' },
			children: [header(), createTextNode('Count: ' + count)]
		})
	}
}

function header(): Html {
	return createNode('header', {
		props: { class: 'header' },
		children: [createTextNode('Hello')]
	})
}

function init(_flags: string): Model {
	return {
		count: 0
	}
}

function update(model: Model): Model {
	return {
		count: model.count + 1
	}
}

function subscription(model: Model): Model {
	return model
}

Vanili.document({ init, view, update, subscription })
