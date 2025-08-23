function avg(x, y) {
    console.log("Done")
  return (x + y) / 2;
}   

//Another way to write the function (Arrow function)
const sum = (x , y) => {
    return (x + y);
}

// This function does not take any arguments and simply prints a message
const hello = () => {
    console.log("Hello How are you yaarrrr ?");
    return "Hiii"; //The return value is gone to the hello() function then to variable v
}

let a = 1, b = 2, c = 3, d = 4, e = 5;

console.log("The Average of " + a + " and " + b + " is " + avg(a, b));
console.log("The Average of " + b + " and " + c + " is " + avg(b, c));
console.log("The Average of " + a + " and " + c + " is " + avg(a, c));
console.log("The Sum of " + d + " and " + e + " is " + sum(d, e));

let v = hello(); // Calling the hello function
console.log(v); // Printing the return value of the hello function

