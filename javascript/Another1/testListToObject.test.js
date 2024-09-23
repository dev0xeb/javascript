const {listToObject} = require("./listToObject");

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