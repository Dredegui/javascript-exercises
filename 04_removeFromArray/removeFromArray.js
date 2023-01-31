const removeFromArray = function(arr, ...args) {
	for (const arg of args) {
		const i = arr.indexOf(arg);
		if (i >= 0) {
			arr.splice(i, 1);
		}
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
