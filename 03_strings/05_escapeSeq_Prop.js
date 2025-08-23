
let name = "Hritik \"Thakur\""
console.log(name.length) // it is property not a function
let name1 = "Hritik Thakur"
console.log (name1.toUpperCase()) //it is a function
console.log(name1.toLowerCase())
console.log(name1.slice(3,9))
console.log(name1.slice(3))
let newname1 = name1.replace("Thakur","Singh")
console.log(newname1)
console.log("")
let name4 = "Hritik"
let name2 = " Harry"
let name3 = name4.concat(name2,"Yes")
console.log(name3)
console.log(name2.trim()) //removes spaces
let fr = "Ram" + " " +"Sita"
console.log(fr)

//for loop for printing the string
let s = "Hritik Thakur"
for (i=0; i<s.length;i++){
  console.log(s[i])
}