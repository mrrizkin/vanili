type Vanili<Model = any, Msg = any> = {
	view: (model: Model) => string;
	init: () => Model;
	update?: (msg: Msg, model: Model) => Model;
};

export default function main({view, init}: Vanili) {
	const initial = init();
	const viewer = view(initial);

	console.log("Init:", initial);
	console.log("View:", viewer);

	const viewerElement = document.createTextNode(viewer);

	return {
		init: (doc) => {
			doc.replaceWith(viewerElement)
		}
	}
}