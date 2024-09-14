function sumEvenNumbers(arr){
	let evenArray = [];
	let addition = 0;
	for(let number of arr){
		if(number % 2 == 0){
			addition += number;
			}
		}
		evenArray.push(addition);
	return evenArray;
}


module.exports = {sumEvenNumbers};