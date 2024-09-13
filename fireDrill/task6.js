function reverseArray(arr){
	let arrBegining = 0
	let arrEnd = arr.length-1
	
	while(arrBegining < arrEnd){
		let temp = arr[arrBegining];
		arr[arrBegining] = arr[arrEnd];
		arr[arrEnd] = temp;
	arrBegining++
	arrEnd--
	}
	return arr
}

module.exports = {reverseArray};