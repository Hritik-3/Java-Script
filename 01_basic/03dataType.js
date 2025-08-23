console.log("Data types in JS")
console.log("")
//primitive data types (NNSSBBU)
// NULL 
// NUMBER  
// SYMBOL 
// STRING 
// BOOLEAN 
// BIGINT 
// UNDEFINED 

let a = null;
let b =345;
let c = true;
let d = BigInt("23")+BigInt("2")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g = undefined //or let g; it also means undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof d)

//Non primitive data types
// Non-primitive data types are objects, arrays, functions, etc.
const item = {
  "Harry": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item["Harry"])
