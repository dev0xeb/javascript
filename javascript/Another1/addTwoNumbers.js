function addTwoNumbersInArray(num){
    let addition = []
    for(let index = 0; index < num.length; index+=2){
            let sum = num[index] + num[index + 1]
            addition.push(sum)
    }    
return addition
}
module.exports = {addTwoNumbersInArray}