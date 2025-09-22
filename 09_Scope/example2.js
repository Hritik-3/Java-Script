function makeCounter() {
  let count = 0;
  return function() {
    count++;
    console.log("Current count:", count);
  }
}

const counter = makeCounter();
counter(); // Current count: 1
counter(); // Current count: 2
counter(); // Current count: 3


//and KIND OF SAME EXAMPLE

function one() {
  let a = 10;

  function two() {
    console.log(a); 
  }

  return two;
}

const myFunc = one();
myFunc(); // ✅ prints 10
myFunc(); // ✅ prints 10
myFunc(); // ✅ prints 10   
myFunc(); // ✅ prints 10