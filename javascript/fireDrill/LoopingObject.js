const car = {
	make: "Toyota",
	model: "Camry",
	year: 2021
}

function loopThroughObject(car){
	for (let values in car){
		console.log(values+": ", car[values])
	}

}
console.log(loopThroughObject(car))