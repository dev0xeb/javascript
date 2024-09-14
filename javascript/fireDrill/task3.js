function countOddNumbers(arr){
	let odd = 0
	for(let number of arr){
		if(number % 2 != 0){
			odd++;
			}
		}
	return odd;
}
module.exports = {countOddNumbers};