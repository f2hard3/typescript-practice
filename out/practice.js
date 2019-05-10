"use strict";
// const add = (a: number, b: number): number => a + b;
// const addMany = (...args: number[]): number => args.reduce(add, 0);
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const div = (a: number, b: number): number => a / b;
// const mapProp = <T>(k: keyof T, arr: T[]) => arr.map(a => a[k]);
// const avg = (arr: number[]) => div(addMany(...arr), arr.length);
// interface Result {
// 	id: number;
// 	result: number;
// }
// const results: Result[] = [
// 	{ id: 0, result: 64 },
// 	{ id: 1, result: 87 },
// 	{ id: 2, result: 89 }
// ];
// const resultsAvg = avg(mapProp("result", results));
// console.log(resultsAvg);
// function deepCloneItem<T>(item: T) {
// 	return JSON.parse(JSON.stringify(item)) as T;
// }
// console.log(typeof (deepCloneItem({ a: 3, b: "2" })));
// let a = { x: 1, y: 2, z: 3 };
// let b = Object.create(a);
// console.log(JSON.stringify(b));
// b.x = 0;
// console.log(JSON.stringify(a)); // {"x":1,"y":2,"z":3}
// console.log(JSON.stringify(b)); // {"x":0}
// let greetUnames: (name: String) => string;
// greetUnames = (name: String): string => `Hi! ${name}`;
// const greetUnames = (name: String): string => `Hi! ${name}`
// console.log(greetUnames("Sunggon Park"));
// console.log(greetNamed("John")); // OK
// console.log(greetUnnamed("John")); // Error
// function greetNamed(name: string): string { return 'Hi! ${name}'; }
// let greetUnnamed = function (name: string): string { return 'Hi! ${name}'; };
// function add(foo: number, bar: number, foobar?: number): number {
// 	const result = foo + bar;
// 	return foobar ? result + foobar : result
// }
// console.log(add(2, 2));
// console.log(add(2, 2, 2));
// function add(foo: number, bar: number, foobar: number = 0): number {
// 	return foo + bar + foobar;
// }
// console.log(add2(2, 2, true));
// function add2(foo, bar, foobar) {
// 	const undefined = 10;
// 	if (foobar === undefined) {
// 		foobar = 0;
// 	}
// 	return foo + bar + foobar;
// }
// function add(foo: number = 1, bar: number, foobar: number = 10): number {
// 	return foo + bar + foobar;
// }
// function add(...arg: number[]): number {
// 	return arg.reduce((p: number, c: number) => p + c);
// }
// console.log(add(3, 4, 5, 10))
// function test(name: string): string; // overloaded signature 
// function test(age: number): string; // overloaded signature 
// function test(single: boolean): string; // overloaded signature 
// function test(value: (string | number | boolean)): string { // implementation signature 
// 	switch (typeof value) {
// 		case "string": return 'My name is ${value}.';
// 		case "number": return `I'm ${value} years old.`;
// 		case "boolean": return value ? "I'm single." : "I'm not single.";
// 		default: throw new Error("Invalid Operation!");
// 	}
// }
// interface Document {
// 	createElement(tagName: "div"): HTMLDivElement; // specialized 
// 	createElement(tagName: "span"): HTMLSpanElement; // specialized 
// 	createElement(tagName: "canvas"): HTMLCanvasElement; // specialized 
// 	createElement(tagName: string): HTMLElement; // non-specialized 
// }
var name = "remo";
var surname = "jansen";
// let html = `<h1>${name} ${surname}</h1>`;
var html = htmlEscape(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<h1>", " ", "</h1>"], ["<h1>", " ", "</h1>"])), name, surname);
function htmlEscape(literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i];
        result
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/"/g, "'")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
    result += literals[literals.length - 1];
    return result;
}
console.log(html);
var templateObject_1;
//# sourceMappingURL=practice.js.map