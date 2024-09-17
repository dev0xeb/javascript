const counter = {
	count: 5,
	step: 4,
	increment: function(){
		return this.count += this.step}
	}
console.log(counter.increment())