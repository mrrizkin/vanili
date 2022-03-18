export type Props = [string, string]

export type NodeType = 'NODE' | 'TEXT'

export type Node = {
	$: NodeType
	__tag: string
	__props: Props[]
	__childrens: Html[]
	__namespace?: string
	__binder?: Attr
	__inline?: string
}

export type Text = {
	$: NodeType
	__text: string
}

export type Html = Node | Text

export type HtmlDocument = {
	title: string
	body: Html[]
}

export type VaniliDocument<Model, Flags> = {
	view: (model: Model) => HtmlDocument
	init: (flags: Flags) => Model
	update: (model: Model) => Model
	subscription: (model: Model) => Model
}
