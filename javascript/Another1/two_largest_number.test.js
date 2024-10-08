const {two_largest_number} = require("./two_largest_number");
test("Get 2 largest number in an arr", ()=>{
let arr = [2,3,5,1,7]
let result = two_largest_number(arr)
expect(result).toEqual([7, 5])
})

test("Get 2 largest number in an arr", ()=>{
    let arr = [1,9,3,4,8]
    let result = two_largest_number(arr)
    expect(result).toEqual([9, 8])
    })