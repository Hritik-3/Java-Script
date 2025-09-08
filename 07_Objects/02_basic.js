console.log("Objects Basic 2")

//const tinderUser = new Object() //singleton object
//console.log(tinderUser); //it will give empty object

const tinderUser = {} //non singleton object
console.log(tinderUser); //it will give empty object
//Both will give empty object but the way of creating object is different 
tinderUser.id = "123abc"
tinderUser.name = "Hritik"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Hritik",
      lastname: "Thakur"
    }
  }
}
console.log(regularUser.fullname.userfullname.firstname);

//merge 2 objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//We can merge 2 objects in multiple ways --
//Using comma operator
const obj3 = {obj1, obj2} //it will give { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(obj3);

//Using Object.assign method 
const obj4 = Object.assign(obj1, obj2) //it will change the obj1
console.log(obj4);

//If we want to keep obj1 and obj2 as it is then we can do like this - known as cloning
const obj5 = Object.assign({}, obj1, obj2) //it will not change the obj1 and obj2 it will create a new object inside curly braces
console.log(obj5);

//***Using spread operator (Used the most)***
const obj6 = {...obj1, ...obj2}  
console.log(obj6);

//users from database in the form of array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hriti@gmail.com"
    },
    {
        id: 3,
        email: "thakur@gmail.com"
    }
]
// console.log(tinderUser); //This will give the output in the form of object
// //OR
// console.log(JSON.stringify(tinderUser) + " tinder user");
// // Outputs: in form of String {"id":"123abc","name":"Hritik","isLoggedIn":false} tinder user
// //Converts a JavaScript object or value to a JSON string, optionally replacing 
// // values if a replacer function is specified or optionally including only the 
// // specified properties if a replacer array is specified.

// console.log(Object.keys(tinderUser)); 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //converts object into array of arrays 
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //checks if the object has the property or not TRUE OR FALSE
// console.log(tinderUser.hasOwnProperty('age')) //FALSE
