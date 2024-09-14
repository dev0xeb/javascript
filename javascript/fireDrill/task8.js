function isPalindrome(word){
	let temp = ""

	for(let index = word.length-1; index >= 0; index--){
		temp +=word[index];
		}
	if(temp == word){
	return true;
	}
	return false;
}

module.exports = {isPalindrome};