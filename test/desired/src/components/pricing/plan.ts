import { createNode, createTextNode } from '../../../../../src/virtual-dom'

export function plan() {
	return createNode('div', {
		props: { class: 'row row-cols-1 row-cols-md-3 mb-3 text-center' },
		children: [
			card(
				'Free',
				'Sign up for free',
				'$0',
				[
					'10 users included',
					'2 GB of storage',
					'Email support',
					'Help center access'
				],
				false,
				false
			),
			card(
				'Pro',
				'Get started',
				'$15',
				[
					'20 users included',
					'10 GB of storage',
					'Priority email support',
					'Help center access'
				],
				false,
				true
			),
			card(
				'Enterprise',
				'Contact us',
				'$29',
				[
					'30 users included',
					'15 GB of storage',
					'Phone and email support',
					'Help center access'
				],
				true,
				true
			)
		]
	})
}

function card(
	planName: string,
	cta: string,
	price: string,
	features: string[],
	isPrimary: boolean,
	isBtnPrimary: boolean
) {
	return createNode('div', {
		props: { class: 'col' },
		children: [
			createNode('div', {
				props: {
					class: `card mb-4 rounded-3 shadow-sm ${
						isPrimary ? 'border-primary' : ''
					}`
				},
				children: [
					createNode('div', {
						props: {
							class: `card-header py-3 ${
								isPrimary ? 'text-white bg-primary border-primary' : ''
							}`
						},
						children: [
							createNode('h4', {
								props: { class: 'my-0 fw-normal' },
								children: [createTextNode(planName)]
							})
						]
					}),
					createNode('div', {
						props: { class: 'card-body' },
						children: [
							createNode('h1', {
								props: { class: 'card-title pricing-card-title' },
								children: [
									createTextNode(price),
									createNode('small', {
										props: { class: 'text-muted fw-light' },
										children: [createTextNode('/mo')]
									})
								]
							}),
							createNode('ul', {
								props: { class: 'list-unstyled mt-3 mb-4' },
								children: features.map((feature) => {
									return createNode('li', {
										children: [createTextNode(feature)]
									})
								})
							}),
							createNode('button', {
								props: {
									type: 'button',
									class: `w-100 btn btn-lg ${
										isBtnPrimary
											? 'btn-primary'
											: 'btn-outline-primary'
									}`
								},
								children: [createTextNode(cta)]
							})
						]
					})
				]
			})
		]
	})
}
