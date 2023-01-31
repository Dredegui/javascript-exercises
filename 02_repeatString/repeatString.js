const repeatString = function(string, number) {
	let res = "";
	if (number < 0) {
		return "ERROR";
	}
	for(let i = 0; i < number; i++) {
		res += string;
	}
	return res;
};

// Do not edit below this line
module.exports = repeatString;
