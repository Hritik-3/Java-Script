const marvel_heros = ['Ironman', 'Spiderman', 'Thor'];
const dc_heros = ['Superman', 'Batmann', 'Wonder'];

    // marvel_heros.push(dc_heros);
    // console.log(marvel_heros);
//it will add the dc_heros array as a single element at the end of the marvel_heros array
    // console.log(marvel_heros.length); //it will return 4 as there are 4 elements in the array
    // console.log(marvel_heros[3][1]); //it will return Batmann as it is at index 1 of the dc_heros array which is at index 3 of the marvel_heros array
    // console.log(marvel_heros[3][0]); //it will return Superman as it is at index 0 of the dc_heros array which is at index 3 of the marvel_heros array

//for concat method we have to create a new array which in this case is all_heros
marvel_heros.concat(dc_heros);
console.log(marvel_heros); //it will not change the marvel_heros array as concat() method does not change the original array
console.log(marvel_heros.length); //it will return 3 as there are 3 elements in the array

const all_heros =  marvel_heros.concat(dc_heros);
console.log(all_heros);
//it will add the elements of the dc_heros array to the end of the marvel_heros array


//spread operator
const new_heros = [...marvel_heros, ...dc_heros]; 
console.log(new_heros);
//it will add the elements of the dc_heros array to the end of the marvel

console.log("");
const another_arr = [1,2,3,[4,5,6],7,[8,9,[10,11],12]];
console.log(another_arr);
console.log(another_arr.length); //it will return 6 as there are 6 elements in the array
const flattened_arr = another_arr.flat(Infinity); //it will flatten the array completely 
console.log(flattened_arr);
console.log(flattened_arr.length); //it will return 12 as there are 9 elements in the flattened array
//flat() method creates a new array with all sub-array elements concaten


console.log("");
//Array.isArray(), Array.from() and Array.of()
console.log(Array.isArray("Hritik")); //it will return false as "Hritik" is not an array
console.log(Array.from("Hritik")); //it will convert the string into an array
//Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

console.log(Array.from({name: "Hritik", age: 21})); //it will return an empty array as the object is not iterable

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
//Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
//it will return [100, 200, 300]