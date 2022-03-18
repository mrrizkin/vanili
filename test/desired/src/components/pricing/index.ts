import { div } from '../../../../../src/html'
import { header } from './header'
import { plan } from './plan'

export function pricing() {
	return div(['class', 'container py-3'])(header(), plan())
}
