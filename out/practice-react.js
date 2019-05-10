"use strict";
// const add = (a: number, b: number): number => a + b;
// const log = (fn: Function) => (...arg: any[]): Function => {
//     console.log(...arg);
//     return fn(...arg)
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const loggedAdd = log(add);
// const result = loggedAdd(2, 3);
// console.log(result)
// const add = (x: number) => (y: number): number => x + y
// const add1: (y: number) => number = add(1);
// const result: number = add1(3);
// console.log(result);
var add = function (x, y) { return x + y; };
var square = function (x) { return x * x; };
var addAndSquare = function (x, y) { return square(add(x, y)); };
console.log(addAndSquare(3, 5));
//# sourceMappingURL=practice-react.js.map