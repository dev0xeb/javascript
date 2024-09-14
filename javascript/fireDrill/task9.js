function sumMultiplesThreeandFive(number){
	let multiplesOf3 =0;
	let multiplesof5 = 0;

	for(let multiples=0; multiples < number; multiples++){
		if (multiples % 3 == 0){
			multiplesOf3 += multiples
		}
		if (multiples % 5 == 0){
			multiplesof5 += multiples
		}
	}

	let addition = multiplesof5 + multiplesOf3
	return addition

}

module.exports = {sumMultiplesThreeandFive};