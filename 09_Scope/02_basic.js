//Always use let and const instead of var to avoid scope surprises.

//************** INTERESTING **************
console.log("Interesting")

// function addone (num){
//   return num + 1; //only this will return not print anything
// }
// addone(10)

// const addTwo = function (num){
//   return num + 2;
// }
// addTwo(10)
//No problem till here Now if we try to declare function before intitalization.


//CASE 1
addone(10)
 function addone (num){
  return num + 1; //only this will return not print anything
}

//CASE 2 
addTwo(10)
const addTwo = function (num){
  return num + 2;
}

// Function Declaration → Hoisted, can be called before defined.
// Function Expression (with let/const) → Not hoisted, must be defined before use.