let gameCounter = 100
console.log(gameCounter);
c = ++gameCounter;
console.log(gameCounter); 
console.log(c); 

let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);

// Stack memory is used in primitive data types
// Heap memory is used in non primitive data types
let myName = "Hritik"
let anotherName = myName
console.log(myName)
anotherName = "Thakur"
console.log(myName)
console.log(anotherName)
console.log("")

let user1 ={
  email:"Shiv@google.com",
  upi:"Shiv@ybl"
}
let user2 = user1
user2.email = "Hritik@apple.com"
console.log(user1);
console.log(user2);
console.log('h','r','i','t','i','k')
console.log('h'+'r'+'i'+'t'+'i'+'k')
