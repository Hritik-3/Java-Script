//06 Numbers and maths
const score = 400
console.log(score) //will display 400
console.log(typeof score) //will display number
const balance = new Number(100)
console.log(balance) //will display [Number: 100]
console.log(typeof balance)       //will display object
console.log(typeof(balance.toString())) //will display string
console.log(balance.toString().length)  //will display 3 as 100 has 3 digits

console.log("Precision and toFixed")
const otherNumber = 123.1966
console.log(otherNumber.toFixed(2)) //will display 123.20
console.log(otherNumber.toFixed(6))  //will display 123.196600  
console.log(otherNumber.toFixed(2)) //will display 123.20
console.log(otherNumber.toPrecision(2)) //will display 1.2e+2 
console.log(otherNumber.toPrecision(3)) //will display 123
console.log(otherNumber.toPrecision(5)) //will display 123.20
console.log(otherNumber.toPrecision(7)) //will display 123.1966
console.log(otherNumber.toPrecision(10)) //will display 123.1966000
