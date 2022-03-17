import { createNode } from '../../../../../src/virtual-dom'
import { header } from './header'
import { plan } from './plan'

export function pricing() {
	return createNode('div', {
		props: { class: 'container py-3' },
		children: [header(), plan()]
	})
}
