import vanili from "../src/";

type Model = {
	count: number;
}

const view = (model: Model) => {
	return "Count " + model.count;
}

const init = () => {
	return { count: 0 }
}

const main = vanili({ init, view });

main.init(document.getElementById("root"))