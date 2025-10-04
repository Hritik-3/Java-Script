//Immediately Invoked Function Expression IIFE

//A function that runs as soon as it is defined and also
//To remove global scope pollution and avoid conflicts of variable names


console.log("IIFE");
console.log("");         

//Named IIFE 1
(function chai(){
    console.log(`DB is connected`);
})();

//Named IIFE 2
//When we write 2 IIFE we should first end the first IIFE with ;
//If we dont use ; it will give error because JS will think that both IIFE are same
(function aurcode(){
    console.log(`Server is connected`);
})();


//Unnamed IIFE
( () => {
    console.log(`Server is connected`);
} ) ();


//Parameterized IIFE
( (name) => {
    console.log(`Server is connected to ${name}`);
} ) ('Hritik');