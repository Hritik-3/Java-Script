// 🔥 VAR
// Function-scoped
// NOT block-scoped
// Can be redeclared
// Can be reassigned
// Hoisted with undefined
// Causes accidental bugs
// Should NOT be used in modern JS

// 🔥 LET
// Block-scoped
// Cannot be redeclared
// Can be reassigned
// Hoisted but NOT initialized (Temporal Dead Zone)
// Safe for variables that need to change
// Preferred over var

// 🔥 CONST
// Block-scoped
// Cannot be redeclared
// Cannot be reassigned
// MUST be initialized at declaration
// Reference is fixed, but internal value can change
// Use const by default unless you need reassignment

// 🔥 SUPER SHORT MEMORY TRICK
// var → garbage
// let → changing variable
// const → fixed reference

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
