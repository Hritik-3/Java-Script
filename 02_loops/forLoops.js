// Loop Type   ---- Use Case
// for	            Fixed number of iterations
// for...in 	    Object keys
// for...of	        Iterable values
// while	        Unknown iterations until condition fails
// do...while   	At least one iteration
// forEach()    	Array iteration
// map()	        Transform arrays
// filter()     	Filter array values


// let sum = 0;
// let n = prompt("Enter a number");
// n = Number.parseInt(n);
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log("The sum of first " + n + " natural numbers is " + sum);

//for...in → Loops over keys / property names
let person = {
  name: "Hritik",
  age: 23,
  city: "Bangalore"
};

console.log("Using for...in:");
for (let key in person) {
  console.log(key, ":", person[key]); // key = property name
}

//for...of → Loops over values in iterable objects (like arrays, strings, etc.)
let fruits = ["Apple", "Banana", "Cherry"];

console.log("Using for...of:");
for (let fruit of fruits) {
  console.log(fruit); // directly gives value
}