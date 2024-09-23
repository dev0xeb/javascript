// const numList =[1,1,2,3,2]

function listToObject(numList){
    const numObject = {}
    for(let values of numList){
        if (numObject[values]){
            numObject[values] +=1;
        } else{
            numObject[values] = 1
        }
    }
    return numObject
}
// console.log(listToObject(numList))
module.exports = {listToObject};