
console.log("Maths and Random")
console.log(Math) //Math is a built in object in JS which has many properties and methods
console.log(Math.PI)
console.log(Math.E)
console.log(Math.round(3.6))
console.log(Math.floor(3.6))
console.log(Math.ceil(3.2))
console.log(Math.trunc(3.9))
console.log(Math.pow(2,3))
console.log(Math.sqrt(64))
console.log(Math.abs(-55))
console.log(Math.min(3,5,1,6,8,-3))
console.log(Math.max(3,5,1,6,8,-3))

console.log(Math.random()) //gives random number between 0 and 1
console.log((Math.random()*10)+1) //gives random number between 1 and 9
console.log(Math.floor((Math.random()*10)+1)) //gives 1 digit number between 1 and 10

const min = 10, max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min) //gives random number between 10 and 20