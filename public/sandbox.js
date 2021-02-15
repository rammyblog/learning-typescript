"use strict";
// const inputs = document.querySelectorAll('input')
// inputs.forEach(input => {
//     console.log(input);
// })
// // Type Basics
// let character = 'mario'
// let age = 30
// let isBlackBelt = false
// // Error
// // character = 50
// const circ = (diameter:number) => {
//     return diameter * Math.PI
// }
// console.log(circ(7.5))
// arrays
// let names:string[] = ['mario','yoshi', 'luigi']
// names.push('toad')
// // error
// // names.push(3)
// let mixed = ['ken', 4, 'ramy', '9']
// // objects
// let ninja = {
//     name:'mario',
//     belt:'black',
//     age:50
// }
// // Explicit tpyes
// let character:string;
// let age:number;
// let isLoggedIn: boolean;
// // arrays
// let ninjas: string[] = []
// // union types
// let mixed: (string | number|boolean)[] = []
// mixed.push('hello')
// mixed.push(23)
// let uid:string|number;
// uid ='123'
// uid =123
// // objects
// let ninjaOne: object;
// ninjaOne = {name:'yoshi', age:30}
// Dynamic types
// let age:any = 25;
// age = true
// console.log(age)
// let mixed :any[] = []
// mixed.push(4)
// mixed.push('hello')
// mixed.push(true)
// console.log(mixed)
// let ninja: {name:any, age:any}
// ninja = {name:'yoshi', age:30}
// console.log(ninja);
// Function Basics
var greet;
greet = function () {
    console.log('heelo again');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
