import { binding, spawn, rawSpawn } from "../scheduler";

export function on(node: any, eventName: string, sendToSelf: any) {
	return spawn(
		binding(function (callback) {
			function handler(event: any) {
				rawSpawn(sendToSelf(event));
			}
			node.addEventListener(eventName, handler);
			return function () {
				node.removeEventListener(eventName, handler);
			};
		})
	);
}
