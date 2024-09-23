// let array = [1, 2, 3, "homie", true];
// // console.log(array)

// let newArray = new Array(3);
// newArray.push(2);
// newArray.push(3);
// newArray.push(4);
// newArray.push(5);

// // console.log(newArray)
// // let result = Array.from("semicolon")
// // console.log(result)

// // let answer = Array.of(1,2,3,4,5,6,7,8,9,8,7,6)
// // console.log(answer)

// let arrayOfNumbers =[1,2,3,4,5,67];
// // let slice = arrayOfNumbers.slice(2, 40 )
// // console.log(slice)

// let result = arrayOfNumbers.splice(1, 2, 4, 1);
// console.log(arrayOfNumbers)
// console.log(result)
let arr = [3,4,5,6,7,8];
// arr.forEach((element)=>{
//     let answer = element * 2;
//     console.log(answer)
// })
function evenNumbers(arr) {
    arr.filter((number)=> number % 2 == 0)
} 