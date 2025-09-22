
console.log("This and Arrow Function")
console.log("")

const user = {
  username: "Hritik",
  price: 999,

  welcomeMessage: function(){
  console.log(`${this.username}, welcome to website`);
    console.log(this);
  
  }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();
console.log(this); //it will give empty object because we are in node environment

function chai(){
  let username = "Hritik"
console.log(this.username);
//as chai is normal function it will give undefined because this is not pointing to any object
console.log(username); //this will give hritik because username is defined in the function
console.log(this);

}
chai();


