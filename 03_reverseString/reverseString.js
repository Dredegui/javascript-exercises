const reverseString = function(string) {
	let i = string.length - 1;
	let res = "";
	while(i >= 0) {
		res += string[i];
		i--;
	}
	return res;
};

// Do not edit below this line
module.exports = reverseString;
