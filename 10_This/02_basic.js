

const chai = () => {
  let username = "Hritik"
console.log(this.username);
//as chai is arrow function it will give undefined because this is not pointing to any object
console.log(username); //this will give hritik because username is defined in the function
console.log(this);

}
chai();

//In arrow function this is not bound to the object it is bound to the lexical scope
//In normal function this is bound to the object that is calling the function