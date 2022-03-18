import { div, footer, p, text, ul, li, a } from '../../../../src/html'

export function footerEl() {
	return div(['class', 'container'])(
		footer([
			'class',
			'd-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'
		])(
			p(['class', 'col-md-4 mb-0 text-muted'])(text('© 2021 Company, Inc')),
			ul(['class', 'nav col-md-4 justify-content-end'])(
				li(['class', 'nav-item'])(
					a(['href', '#'], ['class', 'nav-link px-2 text-muted'])(text('Home'))
				),
				li(['class', 'nav-item'])(
					a(
						['href', '#'],
						['class', 'nav-link px-2 text-muted']
					)(text('Features'))
				),
				li(['class', 'nav-item'])(
					a(['href', '#'], ['class', 'nav-link px-2 text-muted'])(text('FAQs'))
				),
				li(['class', 'nav-item'])(
					a(['href', '#'], ['class', 'nav-link px-2 text-muted'])(text('About'))
				),
				li(['class', 'nav-item'])(
					a(
						['href', 'https://github.com/nugrhrizki/vanili'],
						['class', 'nav-link px-2 text-muted']
					)(text('Source'))
				)
			)
		)
	)
}
