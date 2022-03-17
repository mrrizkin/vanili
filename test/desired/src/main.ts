import Vanili from '../../../src/'
import { HtmlDocument } from '../../../src/types'
import { footer } from './components/footer'
import { header } from './components/header'
import { hero } from './components/hero'
import { pricing } from './components/pricing'

type Model = {
	count: number
}

function view(model: Model): HtmlDocument {
	const count = String(model.count)
	return {
		title: 'Test Vanili',
		body: [header(), hero(), pricing(), footer()]
	}
}

function init(flags: string): Model {
	console.log('flags:', flags)
	return {
		count: 0
	}
}

function update(model: Model): Model {
	return {
		count: model.count + 1
	}
}

function subscription(model: Model): Model {
	return model
}

const app = Vanili.document({ init, view, update, subscription })

app({ flags: 'hello' })
