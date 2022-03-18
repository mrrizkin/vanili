import { Html, Props } from './types'
import { createNode, createTextNode } from './virtual-dom'

export const node =
	(tag: string) =>
	(...attributes: Props[]) =>
	(...children: Html[]) => {
		return createNode(tag, { props: attributes, children: children })
	}

export const text = createTextNode

export const div = node('div')
export const h1 = node('h1')
export const h2 = node('h2')
export const h3 = node('h3')
export const h4 = node('h4')
export const h5 = node('h5')
export const h6 = node('h6')

export const p = node('p')
export const span = node('span')
export const small = node('small')
export const a = node('a')
export const ul = node('ul')
export const li = node('li')

export const button = node('button')
export const header = node('header')
export const footer = node('footer')
