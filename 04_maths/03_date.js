let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString())
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(typeof myDate  ) //will display object;

let myCreatedDate = new Date(2020,0,23)
console.log(myCreatedDate); //

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
console.log(newDate.getTime());

newDate.toLocaleString('default',{
    weekday:'long',
    month:'long'});

console.log(newDate);
