import { Html } from '../../../../src/types'
import { div, h1, text, p, button } from '../../../../src/html'

export function hero(): Html {
	return div(['class', 'px-4 py-5 my-5 text-center'])(
		h1(['class', 'display-5 fw-bold'])(text('Centered hero')),
		div(['class', 'col-lg-6 mx-auto'])(
			p(['class', 'lead mb-4'])(
				text(
					'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.'
				)
			),
			div(['class', 'd-grid gap-2 d-sm-flex justify-content-sm-center'])(
				button(
					['class', 'btn btn-primary btn-lg px-4 gap-3'],
					['type', 'button']
				)(text('Primary button')),
				button(
					['class', 'btn btn-outline-secondary btn-lg px-4'],
					['type', 'button']
				)(text('Secondary button'))
			)
		)
	)
}
