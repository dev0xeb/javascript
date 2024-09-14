function findMax(arr){
	let largest = 0;
	for(let number of arr){
		if(number > largest){
			largest = number;
			}
		}
	return largest
}
module.exports = {findMax};