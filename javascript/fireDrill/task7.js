function factorial(number){
	let num = 1
	for(let count = 1; count <= number; ++count){
		num *= count;
	}

	return num;
}

module.exports = {factorial};