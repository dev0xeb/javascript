function two_largest_number(arr){
    let largest = 0
    let second_largest = 0
    for(let counter = 0; counter < arr.length; counter++){
        const number = arr[counter]
        if(number > largest){
            second_largest = largest
            largest = number;
        }
        else if (number > second_largest && number < largest){
            second_largest = number
        }
    
    }
    return [largest, second_largest]
}
console.log(two_largest_number([1,9,3,4,8]))
module.exports = {two_largest_number};
