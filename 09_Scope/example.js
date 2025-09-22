function outer() {
  const a = 10;
  function inner() {
    const b = 20;
    console.log("INSIDE inner:");
    console.log("a =", a); // Access outer variable from inner
    console.log("b =", b); // Access inner variable from inner
  }
  inner();
  console.log("INSIDE outer:");
  console.log("a =", a); // Access outer variable from outer
  // console.log("b =", b); // ERROR as: b is not defined in outer!
}

outer(); //1st line to be exeuted



//EXPLINATION
// In this example, the inner function can access variables from its outer function (a) but the outer function cannot access variables from the inner function (b). This demonstrates lexical scoping in JavaScript.
//outer(); 1st line to be exeuted
//then flow goes to outer function after a =10 it will go directly to inner function
//inner(); then this part will be executed it will go to inner function where b=20 then it will print a=10 and b=20
//console.log("INSIDE outer:"); 
//then it will come back to outer function and print a=10 
//but if we try to access b in outer function it will give error because b is not defined in outer function