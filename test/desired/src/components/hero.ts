import { createNode, createTextNode } from '../../../../src/virtual-dom'
import { Html } from '../../../../src/types'

export function hero(): Html {
	return createNode('div', {
		props: { class: 'px-4 py-5 my-5 text-center' },
		children: [
			createNode('h1', {
				props: { class: 'display-5 fw-bold' },
				children: [createTextNode('Centered hero')]
			}),
			createNode('div', {
				props: { class: 'col-lg-6 mx-auto' },
				children: [
					createNode('p', {
						props: { class: 'lead mb-4' },
						children: [
							createTextNode(
								'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.'
							)
						]
					}),
					createNode('div', {
						props: {
							class: 'd-grid gap-2 d-sm-flex justify-content-sm-center'
						},
						children: [
							createNode('button', {
								props: {
									type: 'button',
									class: 'btn btn-primary btn-lg px-4 gap-3'
								},
								children: [createTextNode('Primary button')]
							}),
							createNode('button', {
								props: {
									type: 'button',
									class: 'btn btn-outline-secondary btn-lg px-4'
								},
								children: [createTextNode('Secondary button')]
							})
						]
					})
				]
			})
		]
	})
}
