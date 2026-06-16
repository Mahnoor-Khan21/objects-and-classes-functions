// OOP
// 1.Basic Object (Starting Level)
// object def: An Object is a non-primitive data type in JavaScript that stores data in key-value pairs and can also contain methods (functions). It is used to represent real-world entities and organize related data together.

let student ={
    name : "mano",
    age : 17,
    gtreet: function(){
        console.log("Helloo, my name is " + this.name);

    }


};

console.log(student.name);

student.gtreet();

// 2.Constructor Function (Old Style OOP)
// def:A Constructor Function is a special function in JavaScript used to create multiple objects of the same type. It is an old-style OOP technique used before ES6 classes.


function Car(brand, model){
    this.brand = brand;
    this.model = model;
}

const car1 = new Car ("Toyota", "corolla");
const car2 = new Car ("Honda", "civic");

console.log(car1.brand); 
// Toyota
console.log(car2.model);
//  civi

// 3. ES6 Class (Modern OOP)
// defin: An ES6 Class is a modern way in JavaScript to create objects using a blueprint with the class keyword.

class employee {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

let s1 = new employee("Ali",20);
s1. greet();


// 4. Encapsulation (Data Protection)
// def:Encapsulation is the concept of hiding data inside an object and controlling access to it using methods, so the data cannot be directly changed from outside

class person {
    constructor(name){
        let_name = name; // hidden data

        this.getName = function(){
            return_name;
        };
    }
}

const p1 = new person("gul");
console.log(p1.getName());
// Ali
console.log(p1._name);     // undefined (cannot access directly)

// Inheritance (Parent → Child)
// def:Inheritance is an OOP concept in which a child class gets properties and methods from a parent class


class Animal {
    eat() {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking...");
    }
}

const d1 = new Dog();

d1.eat();  // from parent class
d1.bark(); // from child class

// Polymorphism (Method Overriding)
defin: same method different behavir

class Animal {
    sound() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

const a1 = new Animal();
const d1 = new Dog();

a1.sound(); // Animal makes sound
d1.sound(); // Dog barks


// Abstraction means hiding complex details and showing only important features to the user.
// Simple Meaning:
// Complex code hide
// Only simple interface show

class Car {
    start() {
        console.log("Car is starting...");
    }
}

const c1 = new Car();
c1.start();