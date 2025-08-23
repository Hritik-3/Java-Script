
const myArr = [0,1,2,3,4,5];
const myHero = ["Hritik","Harry","Shubh"];
console.log(myArr);
console.log(myArr.length);
console.log(myHero);
console.log(myHero.length);

console.log("");


//it will return the new length of the array not the array values.
//push, pop, unshift, shift, splice, slice, indexOf, includes, sort, reverse, concat
//push method adds a new element to the end of the array and returns the new length of the array
myArr.push(6);
console.log(myArr);
//console.log(myArr.push(7)); //it will return the new length of the array not the array values.
myArr.push(7);
console.log(myArr);

console.log("");
//pop method removes the last element from the array and returns that element
myArr.pop();
console.log(myArr);

console.log("");
//unshift method adds a new element to the beginning of the array and returns the new length of the array
myArr.unshift(8);
console.log(myArr);
myArr.unshift(11);
console.log(myArr);

console.log("");
//shift method removes the first element from the array and returns that element
myArr.shift();
console.log(myArr); //it will remove 11 from the array
myArr.shift();
console.log(myArr); //it will remove 8 from the array   
//push and unshift adds element in the array
//pop and shift removes element from the array

console.log("");
console.log(myArr.includes(23)); //it will return false as 44 is not present in the array
console.log(myArr.includes(4)); //it will return true as 4 is present in

console.log(myArr.indexOf(4)); //it will return the index of 4 which is 4

console.log("");
const newArr = myArr.join(); //it will convert the array into a string
console.log(newArr);
console.log(typeof newArr); //it will show string
console.log(myArr); //it will show the array as it is

console.log("Important");
//splice method can be used to add or remove elements from the array
//splice(starting index, number of elements to be removed, elements to be added)
//slice method returns a new array from the starting index to the ending index (not included)
//slice(starting index, ending index)

//IMPORTANT
//In slice the array is not modified but in splice the array is modified the remaining elements are only shown

console.log("A ",myArr);
const myn1 = myArr.slice(1,4); //it will return a new array from index 1 to index 4 (not included)
console.log(myn1);
console.log("B ",myArr); //original array is not modified

const myn2 = myArr.splice(1,4); //it will return a new array from index 1 to index 4 (not included)
console.log(myn2);
console.log("C ",myArr); //original array is modified the remaining elements are only shown

