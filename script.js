// * Normal function 
// [function is a reusable block of code used to perform a specific task.]


 function greet (){
    console.log("welcome to convo");
}

greet();


// Function with Parameters
// [Parameters allow functions to take input values.]

function person(name){

    console.log("Hello" + " " + name);
}

person("Ali");

// add two Numbers

function add(a,b){
    console.log(a+b);
}
add(4,5);

// Multiply Numbers

function multiply(z,y){
    console.log(z*y);
}
multiply(6,4);

// Return keywords
// [return sends a value back from a function.]

function retn(i,j){
    return i + j;

}

let val = retn(8,9);
console.log(val);


// Check Even or Odd

function check(num){
    if(num % 2 == 0){
       return "Even";
    }else{
        return "Odd";
    }
}
console.log(check(4));

// Function Expression
// [A function stored inside a variable.]

const meet= function(name){
    return "Hello" + name;
};

console.log(meet("ali"));

// Arrow Functions
// [A shorter way to write functions using => syntax..]

let a = (name)=>{
    return "Hello" + name;
}

console.log(a("sara"));

// Short Version

let person1 = name=>"Hello" + name;
console.log(person1("Gul"));

// Callback Functions
// [A function passed as an argument to another function]

function processUser(callback){
    callback();
}

function welcome(){
    console.log("welcome User");
}

processUser(welcome);

// another example

function calculte(a,b, operatoion){
    return operatoion (a , b);
    
}
 function add(x,y){
    return x + y;
 }

 console.log(calculte(10,34,add));


//  Higher Order Functions

// [A function that takes another function as an argument or returns a function]

function greet(){

    return function(){
        console.log("Hello");

    };
}

const result = greet();
result ();

// Default Parameters

function pgreet(name = "Guest"){
    console.log("Hello" + name);
}

pgreet();
pgreet("Ali");

// Default Parameters

function total(...numbers){
    let sum = 0;

    for(let num of numbers){
        sum += num;
    }
    return sum;
}

console.log(total(10,39,40));

// Scope
// [Where a variable can be used in your code.]

let globalVar = "I am Global"; // global scope [A variable declared outside all functions or blocks is global.]

function test() {

    let localVar = "I am Local"; // Function Scope or Local Scope [(Function Scope) 🧩

// A variable declared inside a function is local.]

    console.log(globalVar);
    console.log(localVar);
}

test();

// Block Scope (let / const) 

// [Variables declared inside { } (like if, loop) using let or const are block scoped.]


// if(true){
//     let x = 10;
//     console.log(x); // 10
// }
// console.log(x); //Error

// Global scope → anywhere in code
// Function scope → only inside function
// Block scope → only inside { }


// Closure ⭐
function outer (){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    };
}

const counter = outer();

counter();
counter();
counter();

// IIFE

// Immediately Invoked Function Expression

(function(){
    console.log("I run immediately");
})();

// this Keyword

var person = {

    name: "Ali",

    greet() {
        console.log(this.name);
    }
};

person.greet();

// Constructor Function

function Student(name, age){
    this.name = name;
    this.age = age;
}
const s1 

// Promise + Function

function fetchUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("User Found");
        }, 2000);

    });

}

fetchUser()
.then(result1 => console.log(result1));

// Async Await

function getUser() {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Ali");
        }, 2000);

    });

}

async function showUser() {

    const user = await getUser();

    console.log(user);

}

showUser();

showUser();