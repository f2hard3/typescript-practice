// const add = (a: number, b: number): number => a + b;
// const log = (fn: Function) => (...arg: any[]): Function => {
//     console.log(...arg);
//     return fn(...arg)
// }
// const loggedAdd = log(add);
// const result = loggedAdd(2, 3);
// console.log(result)
// const add = (x: number) => (y: number): number => x + y
// const add1: (y: number) => number = add(1);
// const result: number = add1(3);
// console.log(result);
const add = (x, y) => x + y;
const square = (x) => x * x;
const addAndSquare = (x, y) => square(add(x, y));
console.log(addAndSquare(3, 5));
//# sourceMappingURL=practice-react.js.map