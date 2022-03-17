import { createNode, createTextNode } from '../../../../src/virtual-dom'

export function footer() {
	return createNode('div', {
		props: { class: 'container' },
		children: [
			createNode('footer', {
				props: {
					class: 'd-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'
				},
				children: [
					createNode('p', {
						props: { class: 'col-md-4 mb-0 text-muted' },
						children: [createTextNode('© 2021 Company, Inc')]
					}),
					createNode('ul', {
						props: { class: 'nav col-md-4 justify-content-end' },
						children: [
							createNode('li', {
								props: { class: 'nav-item' },
								children: [
									createNode('a', {
										props: {
											href: '#',
											class: 'nav-link px-2 text-muted'
										},
										children: [createTextNode('Home')]
									})
								]
							}),
							createNode('li', {
								props: { class: 'nav-item' },
								children: [
									createNode('a', {
										props: {
											href: '#',
											class: 'nav-link px-2 text-muted'
										},
										children: [createTextNode('Features')]
									})
								]
							}),
							createNode('li', {
								props: { class: 'nav-item' },
								children: [
									createNode('a', {
										props: {
											href: '#',
											class: 'nav-link px-2 text-muted'
										},
										children: [createTextNode('Pricing')]
									})
								]
							}),
							createNode('li', {
								props: { class: 'nav-item' },
								children: [
									createNode('a', {
										props: {
											href: '#',
											class: 'nav-link px-2 text-muted'
										},
										children: [createTextNode('FAQs')]
									})
								]
							}),
							createNode('li', {
								props: { class: 'nav-item' },
								children: [
									createNode('a', {
										props: {
											href: '#',
											class: 'nav-link px-2 text-muted'
										},
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
