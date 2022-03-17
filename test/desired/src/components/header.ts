import { createNode, createTextNode } from '../../../../src/virtual-dom'
import { Html } from '../../../../src/types'

export function header(): Html {
	return createNode('div', {
		props: { class: 'container' },
		children: [
			createNode('header', {
				props: {
					class: 'd-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'
				},
				children: [
					createNode('a', {
						props: {
							href: '/',
							class: 'd-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
						},
						children: [
							createNode('span', {
								props: { class: 'fs-4' },
								children: [createTextNode('Test Vanili')]
							})
						]
					}),
					createNode('ul', {
						props: { class: 'nav nav-pills' },
						children: [
							createNode('li', {
								props: { class: 'nav-item' },
								children: [
									createNode('a', {
										props: { class: 'nav-link active', href: '#' },
										children: [createTextNode('Home')]
									})
								]
							}),
							createNode('li', {
								props: { class: 'nav-item' },
								children: [
									createNode('a', {
										props: { class: 'nav-link', href: '#' },
										children: [createTextNode('Features')]
									})
								]
							}),
							createNode('li', {
								props: { class: 'nav-item' },
								children: [
									createNode('a', {
										props: { class: 'nav-link', href: '#' },
										children: [createTextNode('Pricing')]
									})
								]
							}),
							createNode('li', {
								props: { class: 'nav-item' },
								children: [
									createNode('a', {
										props: { class: 'nav-link', href: '#' },
										children: [createTextNode('FAQs')]
									})
								]
							}),
							createNode('li', {
								props: { class: 'nav-item' },
								children: [
									createNode('a', {
										props: { class: 'nav-link', href: '#' },
										children: [createTextNode('About')]
									})
								]
							})
						]
					})
				]
			})
		]
	})
}
