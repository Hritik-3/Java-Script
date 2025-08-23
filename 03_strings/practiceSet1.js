console.log("Chapter 4 Practice Set Strings");
let str1 = "Please give Rs 1000";
let amt1 = str1.slice("Please give Rs ".length);
//.slice() expects a number index, not a string.
console.log(amt1);
//OR
let str2 = "Please give Rs 1000";
let amt2 = "Please give Rs ".length;
let str3 = Number.parseInt(str2.slice(amt2));
console.log(str3);
console.log(typeof str3);
console.log("");
//problem 5
let friend = "Deepika";
console.log(friend);
console.log(friend[3]);
let newfriend = friend.replace("p", "d");
console.log(newfriend);
console.log("");
console.log(2**3)
console.log("2"+3)
console.log(2+"3")
console.log("2"+3+2)
console.log(2+3+"2")
console.log(+true);
console.log(+" ")