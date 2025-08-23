console.log("This is var, let, const tutorial");
console.log("")
var a=90;
var b="Harry";
var c=null;
var d=undefined;
{
    var b='this'
    console.log(b)
}
console.log(b)   //var the values can be changed
console.log("")

//let
// let is the blocked scoped
// var can give you bugs always use let
// let cannot be redeclared but can be updated.

let a=90;
let b="Harry";
let c=null;
let d=undefined;
{
    let b='this'
    console.log(b)
}
console.log(b) 
console.log("")

//const
// const is used to declare variables that are not going to change
// const cannot be updated or redeclared
let e=90;
const f="Harry";
let g=null;
let h=undefined;
{
    const f='this'
    console.log(f)
}
console.log(f) //const cannot be redeclared but can be updated.
console.log("") 
//when we know that the value is not going to change we use const always.
