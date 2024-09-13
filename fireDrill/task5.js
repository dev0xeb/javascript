function firstDuplicate(arr){
	for(let count = 0; count < arr.length; count++){
		for(let compare = count + 1; compare < arr.length; compare++){
			if (arr[count]	== arr[compare]){
				return arr[count]
			}
		}
	}
	return -1
}
		

module.exports = {firstDuplicate};