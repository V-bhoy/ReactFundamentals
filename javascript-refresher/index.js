// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
//
// const counter = outer();
// counter();
// counter();
// counter();

function hello(){
    console.log("hello");
}
hello.prototype.age = 30
console.log(hello.prototype);

// {
//     constructor: ƒ Person(),
//     __proto__: Object.prototype
// }
// This happens because JavaScript automatically assigns a constructor property to the .prototype object, which points back to the function itself.
// This is useful for identifying which constructor function created an object.


// ENCAPSULATION
// hides internal data and protects it from unwanted access.
// Here, _age is “encapsulated” — it’s not directly accessible from outside.
function User(name, age) {
    let _age = age; // private variable

    this.name = name;

    this.getAge = function () {
        return _age;
    };

    this.setAge = function (newAge) {
        if (newAge > 0) _age = newAge;
    };
}
const user1 = new User("ash", 24);
console.log(user1) // age is not accessible through the object
console.log(User.prototype)

// INHERITANCE
//  One object can inherit the properties and methods of another.
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name + " makes a sound.");
};

function Dog(name) {
    Animal.call(this, name); // inherit properties
}

Dog.prototype = Object.create(Animal.prototype); // inherit methods
Dog.prototype.constructor = Dog;

const dog = new Dog("Tommy");
dog.speak(); // Tommy makes a sound.
console.log(Animal.prototype)
console.log(Dog.prototype)

// POLYMORPHISM
// Many forms — same method name, different implementations.

Dog.prototype.speak = function () {
    console.log(this.name + " barks.");
};

const dog1 = new Dog("Bruno");
dog1.speak(); // Bruno barks.  <-- Overrides the parent method
// Dog overrides speak() from Animal.

// ABSTRACTION
//  Hiding complex internal details and showing only what is necessary.
// we can achieve it with closures and modules.
function Car() {
    let engineStarted = false;

    this.start = function () {
        engineStarted = true;
        console.log("Engine started.");
    };

    this.drive = function () {
        if (engineStarted) console.log("Driving...");
        else console.log("Start the engine first.");
    };
}

// engineStarted is hidden from the outside.
//     Only necessary methods (start and drive) are exposed.

//	•	JavaScript is prototype-based, not class-based like Java or C++.
// 	•	But with ES6, you can use class syntax to make it more familiar:

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(this.name + " makes a sound.");
//     }
// }
//
// class Dog extends Animal {
//     speak() {
//         console.log(this.name + " barks.");
//     }
// }

// Under the hood, this still uses prototypes!
const arr = [1,2,3,4,5]
console.log(arr.__proto__)

// Object.create
const Parent = {p1: "abc", p2: "def"};
const Child = Object.create(Parent);
console.log(Parent.__proto__)
console.log(Child.__proto__)
