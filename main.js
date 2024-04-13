var a = 5
var b = 6
var ans = a+b
console.log("Answer: "+ans)

// const  
const name = "Rahul"
console.log(name + ' is learning JavaScript')
console.log(typeof name)

// array
let cars=["BMW","Audi","Range Rover"]
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}
console.log(cars)

//if-else
const hour = 16
if(hour < 12){
    console.log("We are not allowed")
}
else{
    console.log("We are allowed")
}

// for loop
var count = 10
for(let i = 1; i <= count; i ++){
    console.log(i)
}

//object
const person = {
    name:"Smith",
    age:34,
    isStudent:false,
    hobbies: ["Reading","Writing","Coding"],
};
console.log(person.age);

//function
function checkAge(age){
    if(age<18)
        console.log("You are young.");
    else if (age==18)
        console.log("You are old enough to vote.");
    else
        console.log("You are an adult now.");
}
checkAge(18)

//prompt
var prompt = require('prompt-sync')();
let userName = prompt("Enter your name: ");
console.log(`Hello ${userName}`);