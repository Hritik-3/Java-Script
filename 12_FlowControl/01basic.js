// < , > , <= , >= , == , === , != , !== 

//Shortend forms
// a = a + 5  => a += 5
// a = a - 5  => a -= 5
// a = a * 5  => a *= 5
// a = a / 5  => a /= 5
// a = a % 5  => a %= 5

// ++a (pre-increment) , a++ (post-increment)
// --a (pre-decrement) , a-- (post-decrement)

// && (AND) , || (OR) , ! (NOT) Conditional Operators

//falsey values : 0 , -0, null , undefined , NaN , "" (empty string), BigInt 0n

//Truthy values : "0" , 'false' , " " (space in string) , [] (empty array) , {} (empty object) , function(){} (empty function)

//Nullish Coalescing Operator (??): null undefined
let val1;
console.log(val1); //undefined
val1 = 5 ?? 10; //5
console.log(val1); 
val1 = null ?? 10; //10
console.log(val1); 
val1 = undefined ?? 10; //10
console.log(val1); 
val1 = 0 ?? 10; //0
console.log(val1); 
val1 = "" ?? "Hello"; //""
console.log(val1); 
val1 = false ?? true; //false
console.log(val1); 