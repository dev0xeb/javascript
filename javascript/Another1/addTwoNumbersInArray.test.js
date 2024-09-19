const {addTwoNumbersInArray} = require("./addTwoNumbers.js")

test("add every 2 numbers in an array", ()=>{
    let arr = [2, 3, 4, 5, 6, 7]
    let result  = addTwoNumbersInArray(arr)
    expect(result).toEqual([5, 9, 13])
})