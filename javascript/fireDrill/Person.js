const person = {
		firstName: "Ayoade",
		lastName: "Clinton",
		fullName: function(){
			return this.firstName +" " + this.lastName}		
		}
console.log(person.fullName())