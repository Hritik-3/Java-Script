//array
//JS array are resizable and can contain multiple data types.
const myArr = [0,1,2,3,4,5,true,"Hritik"];
console.log(myArr);
console.log(typeof myArr); //it will show object as array is a type of object in
console.log(myArr[7]);
console.log(myArr[8]); //it will show undefined as there is no 8th index
myArr[8] = "new element"; //we can add new element in the array
console.log(myArr);
console.log(myArr[8]);