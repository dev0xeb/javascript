const {listToObject} = require("./listToObject");
const {filterScores} = require("./testScores")
const {add5ToScores} = require("./testScores")
const {squareOfNumbers} = require("./testScores")
const {expenseTracker} = require("./testScores")
const {classTiming} = require("./testScores")

test("Loppting through List and turn to object", ()=>{
    let arr = [1,1,2,3,2]
    let result = listToObject(arr)
    expect(result).toEqual({"1": 2,
                            "2" : 2,
                            "3" : 1
                        })
})

test("Loppting through List and turn to object", ()=>{
    let arr = [5,4,5,6,7,6]
    let result = listToObject(arr)
    expect(result).toEqual({"4": 1,
                            "5" : 2,
                            "6" : 2,
                            "7" : 1
                        })
})

test("test for scores greater than 70", ()=>{
    let arr = [58,48,75,96,47,76]
    let result = filterScores(arr)
    expect(result).toEqual([75, 96, 76])
})

test("add 5 to all scores", ()=>{
    let arr = [58,48,75,96,47,76]
    let result = add5ToScores(arr)
    expect(result).toEqual([63, 53, 80, 101, 52, 81])
})

test("square all umbers", ()=>{
    let arr = [2,4,6,8,10]
    let result = squareOfNumbers(arr)
    expect(result).toEqual([4,16,36,64,100])
})

test("add up all expenses in the object", ()=>{
    let expenses = {"groceries" : 150, "dining out": 100, "transportation": 50, "entertainment": 80}
    let result = expenseTracker(expenses)
    expect(result).toEqual(380)
})

test("add up all expenses in the object", ()=>{
    let classSchedule = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]
    let result = classTiming(classSchedule)
    expect(result).toEqual([ '1:00 PM', '3:00 PM', '5:00 PM' ])
})