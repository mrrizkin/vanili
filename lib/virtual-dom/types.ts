export type Prop = [string, string];
export type Event = [string, () => void];

export type NodeType = "NODE" | "TEXT";

export type Node = {
	type: NodeType;
	tag: string;
	props: Prop[];
	events: Event[];
	kids: Html[];
	ns?: string;
};

export type Text = {
	type: NodeType;
	text: string;
};

export type Html = Node | Text;
