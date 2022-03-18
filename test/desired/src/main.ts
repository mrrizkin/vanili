import Vanili from '../../../src/'
import { HtmlDocument } from '../../../src/types'
import { headerEl } from './components/header'
import { footerEl } from './components/footer'
import { hero } from './components/hero'
import { pricing } from './components/pricing'

type Model = {
	count: number
}

function view(_model: Model): HtmlDocument {
	return {
		title: 'Test Vanili',
		body: [headerEl(), hero(), pricing(), footerEl()]
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
