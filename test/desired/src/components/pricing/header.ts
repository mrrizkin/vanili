import { createNode, createTextNode } from '../../../../../src/virtual-dom'

export function header() {
	return createNode('div', {
		props: { class: 'pricing-header p-3 pb-md-4 mx-auto text-center' },
		children: [
			createNode('h1', {
				props: { class: 'display-4 fw-normal' },
				children: [createTextNode('Pricing')]
			}),
			createNode('p', {
				props: { class: 'fs-5 text-muted' },
				children: [
					createTextNode(
						'Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.'
					)
				]
			})
		]
	})
}
