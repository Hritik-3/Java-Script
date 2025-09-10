console.log("Scope")
console.log("")

let a = 300
const b = 300
var c = 300 //it will not give 30 not 300 it will access the value of c from the block or the latest modified value of c

if (true) {
  let a = 10  
  const b = 20
  var c = 30  //We dont use var because it is global scope and it can be accessed outside the block and inside the block
}

// console.log("A is ",a);
// console.log("B is ",b);
// console.log("C is ",c);

console.log("Nested Scope")

function one(){
  const username = "Hritik"

  function two (){
    const website = "youtube"
    console.log(username);
  }
  //console.log(website); //it will give error because website is not defined in the scope of one

  two()
}

one() 
