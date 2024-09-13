const {sumEvenNumbers} = require("./task1.js");
const {findMax} = require("./task2.js");
const {countOddNumbers} = require("./task3.js")
const {primeNumber} = require("./task4.js")
const {firstDuplicate} = require("./task5.js")
const {reverseArray} = require("./task6.js")
const {factorial} = require("./task7.js")
const {isPalindrome} = require("./task8.js")

let arr = [1, 2, 3, 4, 5];

test("Sum Even Numbers", ()=>{
	let result = sumEvenNumbers(arr);
	expect(result).toEqual([6]);
})

test("Find max number", ()=>{
	let result = findMax(arr);
	expect(result).toEqual(5);
})

test("Count odd Numbers", ()=>{
	let result = countOddNumbers(arr);
	expect(result).toEqual(3);
})

test("is primeNumber", ()=>{
	let number = 7;
	let result = primeNumber(number);
	expect(result).toBe(true)
})

test("Find First duplicate", ()=>{
	let arail = [1, 2, 3, 4, 5, 4];
	let result = firstDuplicate(arail);
	expect(result).toEqual(4)
})

test("Reverse an Array", ()=>{
	let result = reverseArray(arr);
	expect(result).toEqual([5, 4, 3, 2, 1])

})

test("Return number factorial", ()=>{
	let num = 5;
	let result = factorial(num);
	expect(result).toBe(120)
})

test("word is palindrome", ()=>{
	let word = "racecar";
	let result = isPalindrome(word);
	expect(result).toBe(true)
})