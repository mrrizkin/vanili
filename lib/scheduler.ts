var _Scheduler_guid = 0;

export function succeed(value: any) {
	return {
		$: "__1_SUCCEED",
		__value: value
	};
}

export function fail(error: any) {
	return {
		$: "__1_FAIL",
		__value: error
	};
}

export function binding(callback: any) {
	return {
		$: "__1_BINDING",
		__callback: callback,
		__kill: null
	};
}

export function spawn(task: any) {
	return binding(function (callback: any) {
		callback(succeed(rawSpawn(task)));
	});
}

export function rawSpawn(task: any) {
	var proc = {
		$: "__2_PROCESS",
		__id: _Scheduler_guid++,
		__root: task,
		__stack: null,
		__mailbox: []
	};

	enqueue(proc);

	return proc;
}

var working = false;
var queue = [];

function enqueue(proc: any) {
	queue.push(proc);
	if (working) {
		return;
	}
	working = true;
	while ((proc = queue.shift())) {
		step(proc);
	}
	working = false;
}

function step(proc: any) {
	while (proc.__root) {
		var rootTag = proc.__root.$;
		if (rootTag === "__1_SUCCEED" || rootTag === "__1_FAIL") {
			while (proc.__stack && proc.__stack.$ !== rootTag) {
				proc.__stack = proc.__stack.__rest;
			}
			if (!proc.__stack) {
				return;
			}
			proc.__root = proc.__stack.__callback(proc.__root.__value);
			proc.__stack = proc.__stack.__rest;
		} else if (rootTag === "__1_BINDING") {
			proc.__root.__kill = proc.__root.__callback(function (newRoot: any) {
				proc.__root = newRoot;
				enqueue(proc);
			});
			return;
		} else if (rootTag === "__1_RECEIVE") {
			if (proc.__mailbox.length === 0) {
				return;
			}
			proc.__root = proc.__root.__callback(proc.__mailbox.shift());
		} // if (rootTag === __1_AND_THEN || rootTag === __1_ON_ERROR)
		else {
			proc.__stack = {
				$: rootTag === "__1_AND_THEN" ? "__1_SUCCEED" : "__1_FAIL",
				__callback: proc.__root.__callback,
				__rest: proc.__stack
			};
			proc.__root = proc.__root.__task;
		}
	}
}
