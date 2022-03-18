// simple way to store global data
export const store = <T>(init: T) => {
	let data: T = init

	return {
		set: (setter: (current: T) => T) => (data = setter(data)),
		get: () => data
	}
}
