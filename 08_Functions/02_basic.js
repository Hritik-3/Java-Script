
//Rest operator is used to represent an indefinite number of arguments as an array
//We use ... before the parameter name to represent rest operator
//Rest operator is used to pass multiple arguments to a function and it will convert them into an array
//We can use rest operator only in the last parameter of the function
//We can use only one rest operator in a function
console.log("Rest Operator");
console.log("");
function calculateCartPrice(...num1){ 
    return num1
}

console.log(calculateCartPrice(100, 800, 1000)); //it will give array of numbers

//case 2
function calculateCartPrice2(var1, var2, ...num1){ 
    return num1
}

console.log(calculateCartPrice2(100, 200, 400, 800, 1000)); //it will give array of numbers [ 1000 ]
//it will take first 2 arguments as var1 and var2 and rest of the arguments will be taken as array


//Passing object to function
console.log("Passing object to function");
console.log("");

const user = {
    username : "Hritik",
    price : 500
}
function handleObject(anyobject){
    console.log(`Useername is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user); //Useername is Hritik and price is 500
handleObject({
                username: "Sam", price: 1000
             }); //Useername is Sam and price is 1000



//Passing array to function
console.log("Passing array to function");
console.log("");
const myArray = [1,2,3,4,5,6,7,8,9]
const myArray2 = [10,11,12,13,14,15]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray)); //2
console.log(returnSecondValue(myArray2)); //11
