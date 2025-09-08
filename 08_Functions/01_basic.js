console.log("Functions")
console.log("");

//this is function declaration or defination
function sayMyName(){
  console.log("H");
  console.log("R");
  console.log("I");
  console.log("T");
  console.log("I");
  console.log("K");
}

//sayMyName();


//case 1
// function addTwoNumbers(num1, num2)
// {
//   console.log(num1 + num2);
// }

//case 2
function addTwoNumbers(num1, num2)
{

  return num1 + num2;
  //OR
  // let result = (num1 + num2)
  // return result;
  console.log("Hritik") //this will not be executed because after return statement nothing will be executed
}


const result = addTwoNumbers(3,5);
console.log("Result is "+result); //undefined because we are not returning anything from the function

//this will not run for case 2 as we have returned the value in the function for case 1 it will run as we are not returning anything from the function.
addTwoNumbers(3+"4"); 
addTwoNumbers(4,null);
addTwoNumbers(null,2);

console.log("Example 2");
console.log("");
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter username");
        return; //this will exit from the function
    }
  return  `${username} just logged in`
}

loginUserMessage("Hritik") //this will not print anything because we are not printing anything in the function
console.log(loginUserMessage("Hritik")); //this will print the value returned by the function
console.log(loginUserMessage()); //this will print undefined just logged in because we are not passing any value to the function so it will take undefined as default value



