import { div, h1, p, text } from '../../../../../src/html'

export function header() {
	return div(['class', 'pricing-header p-3 pb-md-4 mx-auto text-center'])(
		h1(['class', 'display-4 fw-normal'])(text('Pricing')),
		p(['class', 'fs-5 text-muted'])(
			text(
				'Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.'
			)
		)
	)
}
