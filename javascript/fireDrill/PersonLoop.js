const person = {
		firstName: "Doe",
		lastName: "John",
		age: 25		
		}

function loopThroughPerson(person){
	let {firstName, lastName, age} = person
	newPerson = {firstName, lastName, age}
	console.log(newPerson)

}
console.log(loopThroughPerson(person))
