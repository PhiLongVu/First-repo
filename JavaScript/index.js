console.log("Hello world");
console.log("I like pizza");

//window.alert("This is an alert");
//window.alert("I like pizza");

document.getElementById("myH1").textContent = `Hello hi!`;
document.getElementById("myP").textContent =   `I like pizza`;
//comments

/*

This 
is 
a
comment

*/

//variables

let x = 0;
let y;
let age = 100;
let email = "Bro@gmail.com";
let online = true;
console.log(`your mom is ${age} years old`);

let firstname = "Holy";
console.log(typeof firstName);
console.log(`your name is ${firstname}`);
console.log(`your name is ${email}`);
console.log(`online status: ${online}`);

document.getElementById("myP").textContent =  email;


//user input
let username;

//username = window.prompt("what's your username");
//console.log(username);

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("userinput").value;
    document.getElementById("myH1").textContent = `hello ${username}`;
}


//convert variable type

let age2 = "9";
age2 = Number(age2);
age2 += 1;
console.log(`age after convert: ${age2}`);

//constants
const PI = 3.14;
let radius;
let citcumference;

radius = Number(radius);
document.getElementById("mysubmit2").onclick = function(){
    radius = document.getElementById("userinput2").value;
    radius = Number(radius);
    circumference = radius * PI * 2;
    document.getElementById("myP3").textContent = `circumference: ${circumference}`;
}






