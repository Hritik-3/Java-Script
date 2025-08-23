//marks is not a array nor a function it is Object having values in (KEY - VALUE pair)
let marks = {
    harry: 99,
    shubh: 89,
    lovish: 90,
    rohan: 70
};
//BY USING FOR LOOP
//Object.keys is a built-in function in JavaScript, not something you created.
let keys = Object.keys(marks);
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];   //key = ["harry"] and marks[key]= marks["harry"]=99
    console.log("The marks of " + key + " are " + marks[key]);
}


//BY USING FOR ...IN
// for(let key in marks) {
//     console.log("The Marks of " +key+ " are "+ marks[key]);
// }

//Mean of 5 numbers
function mean (a,b,c,d,e){
    console.log("Using Normal Function")
    return (a+b+c+d+e)/5
}

const meann = (a,b,c,d,e) => {
    console.log("Using Arrow Function");
    return (a+b+c+d+e)/5

}

let a=1,b=2,c=3,d=4,e=5;

console.log("The Mean of 5 numbers is "+mean(a,b,c,d,e));
console.log("The Mean of 5 numbers is "+meann(a,b,c,d,e));