console.log("High Order Array Loops");
console.log("for ...in loop");
//Used for Objects not arrays  , Iterates over object properties ONLY
//Not used for arrays as it gives indexes as strings not numbers and also breaks order of iteration.
const user1 = {
  name: "Hritikk",
  age: 21,
  city: "Jaipur",
};
for (let val in user1) {
  // console.log(user1[val]);
}


//for of used for arrays, strings, map, set or any iterables 
//["","",""]
//[{},{},{},{}]
//Not used for objects as objects are not iterables
//array
console.log("for ...of loop")
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // console.log(num);
}
//strings
const greetings = "Hello World!";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

console.log("forEach loop")
//Method used only on array to iterate over each element of array
//forEach loop does not return anything it just iterates over each element of array
const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach(function (item) {
//   console.log(item);
// });
//OR
// coding.forEach((item) => {
//     console.log(item);
// });

//It is better than for loop as 
//No accidental Infinite Loops, No need of incrementing or decrementing the counter, No need of initializing the counter, No need of checking the condition,not messing with the array length.

//Limitations of forEach loop
//Cannot use break or continue statements, Cannot use return statement to exit the loop, Cannot use async/await inside forEach loop, Cannot use forEach loop with generators, Cannot use forEach loop with promises.


// console.log();
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); //it will not print this because map does not allow duplicate keys

// console.log(map);
// for (const [key, value] of map){
//   console.log(key,':-' , value);
// }
