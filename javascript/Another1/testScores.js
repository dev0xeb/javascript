function filterScores (scorearr){
    let bestResult = scorearr.filter(scorearr => scorearr >= 70)
    return bestResult
}
console.log(filterScores([70,56,57,78,56,78,35,96,37,40]))


function add5ToScores(scorearr){
    function add5(num){
        return num + 5
    }

    let newResult = scorearr.map(add5)
    return newResult
}
console.log(add5ToScores([70,56,57,78,56,78,35,96,37,40]))

function squareOfNumbers(numarr){
    let numarrSquare = numarr.map(numarr => Math.pow(numarr, 2))
    return numarrSquare
}
console.log(squareOfNumbers([2,4]))

function expenseTracker(expenseObj){
    let addition = 0
    for(values in expenseObj){
        addition += expenseObj[values]
    }
    return addition
}
console.log(expenseTracker({"groceries" : 150, "dining out": 100, "transportation": 50, "entertainment": 80}))
module.exports = {add5ToScores, filterScores, squareOfNumbers, expenseTracker}

