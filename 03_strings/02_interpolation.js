let boy1 = "Pramod"
let boy2 = "Nikhil"
let sentence = `boy2 is a friend of boy1`
console.log(sentence)
//template literals
//String interpolation is the process of evaluating a string literal containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values.
let sentence1 = `${boy2} is a friend of ${boy1}`
console.log(sentence1)

const name = "Hritik"
const repoCount = 50
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)
//with the help of backticks we can use the variables in the string and also we can use the functions in the string. such as toUpperCase(), toLowerCase(), etc.
