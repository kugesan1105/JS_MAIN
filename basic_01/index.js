// Oop in JavaScript
// 1. Object literal
// 2. Factory function
// 3. Constructor function
// 4. Prototype
// 5. Class

// // 1. Object literal
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//     return "draw";
//   },
// };

// circle.draw();

// // 2. Factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(1);
// circle1.draw();

// const circle2 = createCircle(2);
// circle2.draw();


// 3. Constructor function

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.draw = function () {
//             console.log("draw");
//         };
//     }
// }

// const circle2 = new Circle(1);
// circle2.draw();

// const circle3 = new Circle(2);
// circle3.draw();

// p = String("Hello");
// console.log(p);

// // 4. Prototype
// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.draw = function () {
//     console.log("draw");
//     }

// const circle3 = new Circle(1);
// circle3.draw();

// // 5. Class
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   draw() {
//     console.log("draw");
//   }
// }

// const circle4 = new Circle(1);
// circle4.draw();

// // Inheritance
// // 1. Prototype
// function Shape() {
// }

// Shape.prototype.duplicate = function () {
//     console.log("duplicate");
//     }

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function () {
//     console.log("draw");
//     }


//  loop through the properties of an object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log("draw");
//     }
// }
// let x=90;

// if ('radius' in circle)    
//      console.log("yes");
//         x = 10;
// console.log(x);
// for (let key in circle) {
//     console.log(key, circle[key]);
// }


// for (let key of Object.keys(circle)) {
//     console.log(key);
// }

// for (let entry of Object.entries(circle)) {
//     console.log(entry);
// }

// loops in JavaScript
// 1. for
// 2. while
// 3. do while
// 4. for in
// 5. for of

// // 1. for
// for (let i = 0; i < 5; i++) {
//     console.log("Hello World");
// }

// // 2. while
// let i = 0;
// while (i < 5) {
//     console.log("Hello World");
//     i++;
// }

// // 3. do while
// let j = 0;
// do {
//     console.log("Hello World",j);
//     j++;
// }
// while (j < 5);

// 4. for in
// const person = {
//     name: "Mosh",
//     age: 30
// };

// for (let key in person) {
//     console.log(key, person[key]);
// }

// // 5. for of
// const colors = ["red", "green", "blue"];
// for (let color of colors) {
//     console.log(color);
// }

// // 6. break and continue
// let k = 0;
// while (k <= 10) {
//     if (k === 5) break;
//     if (k % 2 === 0) {
//         k++;
//         continue;
//     }
//     console.log(k);
//     k++;
// }

// // // 7. forEach
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index) => console.log(index, number));

// // 8. map
// const doubleNumbers = numbers.map(number => number * 2);
// console.log(doubleNumbers);

// // 9. filter
// const filteredNumbers = numbers.filter(number => number >= 3);
// console.log(filteredNumbers);

// // 10. reduce
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);

// // 11. some
// const hasPositiveNumbers = numbers.some(number => number >= 0);
// console.log(hasPositiveNumbers);

// // 12. every
// const allPositiveNumbers = numbers.every(number => number >= 0);
// console.log(allPositiveNumbers);

// // 13. find
// const found = numbers.find(number => number >= 3);
// console.log(found);


// Private properties and methods
// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0 };
//     let computeOptimumLocation = function (factor) {
//         // ...
//     }
//     this.draw = function () {
//         computeOptimumLocation(0.1);
//         console.log("draw");
//     }
// }

// const circle = new Circle(1);
// circle.draw();
 



//  StopWatch

// function stopWatch() {
//     this.duration=0;
//     let startTime = null;

//     this.start = function() {
//         const now = new Date();
//         const seconds = now.getSeconds();
//         this.duration=0;
//         startTime=seconds;
//     }
//     this.Stop = function() {
//         const now = new Date();
//         const seconds = now.getSeconds();
//         this.duration= seconds - startTime;
//     }

// }

// let sw=new  stopWatch();

// function StopWatch() {
//     this.duration = 0;
//     let startTime = null;

//     this.start = function() {
//         if (startTime !== null) {
//             throw new Error("Stopwatch has already started.");
//         }
//         startTime = new Date().getTime();
//     };

//     this.stop = function() {
//         if (startTime === null) {
//             throw new Error("Stopwatch is not started yet.");
//         }
//         const now = new Date().getTime();
//         this.duration = (now - startTime) / 1000; // Convert to seconds
//         startTime = null; // Reset startTime for next start
//     };

//     this.reset = function() {
//         this.duration = 0;
//         startTime = null;
//     };

//     this.getDuration = function() {
//         return this.duration;
//     };
// }

// let sw = new StopWatch();


// prototypes

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log("draw");
//     }
// }

// const circle = new Circle(1);

// Circle.prototype.toString = function() {
//     return "Circle with radius " + this.radius;
// }

// console.log(circle.toString());

// // adding properties to prototype

// Circle.prototype.toString = function() {
//     return "Circle with radius " + this.radius;
// }

// Circle.prototype.location = { x: 1, y: 1 };

// console.log(circle.location);


//  Js Mappping
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.map((number, index) =>  {(number * 2)
    console.log(index, number);
    return number * 2;
}
 ));


console.log(numbers);