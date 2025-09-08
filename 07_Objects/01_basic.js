//Objects are used to store multiple values in a single variable
//Objects are non-primitive data types
//Objects are mutable (can be changed)
//Objects are key-value pairs
//In objects keys are always strings
//In objects values can be of any data type
//Objects are unordered (no index)
//Objects are defined using curly braces {}

//Singleton object
//object.create

//The property name (key) → always a string in JavaScript objects.
//The property value → can be number, string, array, boolean, object, etc.
const age1 = "age";
const name1 = "name";
const JsUser = {
  name: "Hritik",
  age: 21,
  location: "Jaipur",
  email: "hritik@google.com",
  lastLoginDays: ["Monday", "Saturday"]
}
console.log(typeof JsUser.name); //will give string bec. Hritik is a string
console.log(typeof JsUser.age); //will give number bec. 21 is a number

console.log(JsUser["name"]); 
console.log(JsUser[name1]); //Here name is treated as a variable not string "name" so it will give error

console.log(JsUser[age1]);  //Here age is treated as a variable not string "age" so it will give error
console.log(JsUser["age"]);


//JsUser.age → dot notation, only works with valid identifiers.
//JsUser["age"] → bracket notation, key must be a string (or a variable that evaluates to a string).

JsUser.age = 30;
console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.age = 40;
// console.log(JsUser); //age is same as 30 because we have freezed the object
console.log("FUNCTIONS");
JsUser.greeting = function(){
  console.log("Hello JS user");
  //it will return undefined implicitly
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name} Welcome here `);
}
console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());




const sym = Symbol("key1"); //it will create a unique key

//object literal syntax
const JsUser = {
    name: "Hritik",
    "full name": "Hritik Singh",
    age: 21,
    sym: "myKey2", //it will not take the symbol as key
    [sym]:"new_symbol", //to use symbol as key we have to use square brackets
    location: "India",
    email: "hritiksingh1029@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

//console.log(JsUser.full name); //it will give error as there is space in the key name
console.log(JsUser["full name"]); //to access the value of a key with space in it we have to use bracket notation
console.log(JsUser.name); //dot notation
console.log(JsUser[sym]); //to access the value of a key which is a symbol we have to use bracket notation
console.log(typeof sym);
console.log(JsUser.sym); //it will print myKey2 as it is a string
console.log(typeof JsUser.sym);
console.log(JsUser.age);
console.log(JsUser["age"]);
console.log(JsUser.lastLoginDays);

//We can access by . operator but everything is not possible with . operator 
//Because of space in key name and symbol key we have to use [] operator


console.log("Accessing using Index");
//Array m key value pair nhi hota Access krne k liye index use krte h
myArr = ["h", "r", "i", "t", "i", "k"]
console.log(myArr[0]); //h
console.log(myArr[1]); //r