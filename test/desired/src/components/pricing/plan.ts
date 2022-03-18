import { div, li, ul, h1, h4, text, small, button } from '../../../../../src/html'

export function plan() {
	return div(['class', 'row row-cols-1 row-cols-md-3 mb-3 text-center'])(
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
	)
}

function card(
	planName: string,
	cta: string,
	price: string,
	features: string[],
	isPrimary: boolean,
	isBtnPrimary: boolean
) {
	return div(['class', 'col'])(
		div([
			'class',
			`card mb-4 rounded-3 shadow-sm ${isPrimary ? 'border-primary' : ''}`
		])(
			div([
				'class',
				`card-header py-3 ${
					isPrimary ? 'text-white bg-primary border-primary' : ''
				}`
			])(h4(['class', 'my-0 fw-normal'])(text(planName))),
			div(['class', 'card-body'])(
				h1(['class', 'card-title pricing-card-title'])(
					text(price),
					small(['class', 'text-muted fw-light'])(text('/mo'))
				),
				ul(['class', 'list-unstyled mt-3 mb-4'])(
					...features.map((feature) => {
						return li()(text(feature))
					})
				),
				button(
					[
						'class',
						`w-100 btn btn-lg ${
							isBtnPrimary ? 'btn-primary' : 'btn-outline-primary'
						}`
					],
					['type', 'button']
				)(text(cta))
			)
		)
	)
}
