const book = {
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		yearPubished: 1925
	}

let {title, author} = book
console.log(book.title + " by " + book.author)


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