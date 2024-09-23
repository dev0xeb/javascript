function filterScores (scorearr){
    let bestResult = scorearr.filter(scorearr => scorearr >= 70)
    return bestResult
}


function add5ToScores(scorearr){
    function add5(num){
        return num + 5
    }
    let newResult = scorearr.map(add5)
    return newResult
}

function squareOfNumbers(numarr){
    let numarrSquare = numarr.map(numarr => Math.pow(numarr, 2))
    return numarrSquare
}

function expenseTracker(expenseObj){
    let addition = 0
    for(values in expenseObj){
        addition += expenseObj[values]
    }
    return addition
}

function classTiming(timearr){
    let afternoonClass = timearr.filter(timearr => timearr.includes("PM"))
    return afternoonClass
}

function bookClub (){
    
}
module.exports = {add5ToScores, filterScores, squareOfNumbers, expenseTracker, classTiming}
