import { Html } from '../../../../src/types'
import { a, div, ul, li, text, header, span } from '../../../../src/html'

export function headerEl(): Html {
	return div(['class', 'container'])(
		header([
			'class',
			'd-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'
		])(
			a(
				['href', 'https://github.com/nugrhrizki/vanili'],
				[
					'class',
					'd-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
				]
			)(span(['class', 'fs-4'])(text('Test Vanili'))),
			ul(['class', 'nav nav-pills'])(
				li(['class', 'nav-item'])(
					a(['href', '#'], ['class', 'nav-link active'])(text('Home'))
				),
				li(['class', 'nav-item'])(
					a(['href', '#'], ['class', 'nav-link '])(text('Features'))
				),
				li(['class', 'nav-item'])(
					a(['href', '#'], ['class', 'nav-link '])(text('FAQs'))
				),
				li(['class', 'nav-item'])(
					a(['href', '#'], ['class', 'nav-link '])(text('About'))
				),
				li(['class', 'nav-item'])(
					a(
						['href', 'https://github.com/nugrhrizki/vanili'],
						['class', 'nav-link ']
					)(text('Source'))
				)
			)
		)
	)
}
