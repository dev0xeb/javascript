function isPalindrome(word){
	wordLength = word.length -1
	for (let count = 0; count < wordLength; count++){
	let strBegininng = word[count];
	let strEnd = word.length-1;
	if(strBegininng !== strEnd){
		return false
	}
}
	return true
		
}

module.exports = {isPalindrome};