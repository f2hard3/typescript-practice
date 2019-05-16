// const add = (a: number, b: number): number => a + b;
// const addMany = (...args: number[]): number => args.reduce(add, 0);
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
// let name = "remo";
// let surname = "jansen";
// // let html = `<h1>${name} ${surname}</h1>`;
// let html = htmlEscape`<h1>${name} ${surname}</h1>`;
// function htmlEscape(literals: TemplateStringsArray, ...placeholders: any[]) {
// 	let result = "";
// 	for (let i = 0; i < placeholders.length; i++) {
// 		result += literals[i];
// 		result += placeholders[i]
// 			.replace(/&/g, "&amp;")
// 			.replace(/"/g, "&quot;")
// 			.replace(/"/g, "'")
// 			.replace(/</g, "&lt;")
// 			.replace(/>/g, "&gt;");
// 	}
// 	result += literals[literals.length - 1]; return result;
// }
// console.log(html);
// class Person {
// 	private _name: string;
// 	constructor(name: string) { this._name = name; }
// 	public greet() { console.log(`Hi! My name is ${this._name}`) }
// 	public greetDelay(time: number) {
// 		setTimeout(() => {
// 			console.log(`Hi! My name is ${this._name}`); // Error 
// 		}, time);
// 	}
// }
// let person = new Person("Remo");
// person.greetDelay(1000); // Error
// Person.prototype.greetDelay = function (time) {
// 	const _this = this;
// 	setTimeout(function () {
// 		console.log(`Hi! My name is ${_this._name}`)
// 	}, time);
// }
// person.greetDelay(1000);
// function doSomethingAsync(
// 	arr: number[],
// 	success: (arr: number[]) => void,
// 	error: (e: Error) => void) {
// 	setTimeout(() => {
// 		try {
// 			let n = Math.ceil(Math.random() * 100 + 1);
// 			if (n < 25) {
// 				throw new Error("n is < 25");
// 			}
// 			success([...arr, n]);
// 		} catch (e) {
// 			error(e);
// 		}
// 	}, 1000);
// }
// const foo = () => {
// 	return new Promise<string>((resolve, reject) => {
// 		try {
// 			resolve("SomeValue");
// 		} catch (e) {
// 			reject(e);
// 		}
// 	});
// }
// foo().then(value => console.log(value)).catch(e => console.log(e));
// const doSomethingAsync = (arr: number[]) => new Promise<number[]>((resolve, reject) => {
// 	setTimeout(() => {
// 		try {
// 			const n = Math.ceil(Math.random() * 100 + 1);
// 			if (n < 25) throw new Error("n is < 25");
// 			resolve([...arr, n]);
// 		} catch (e) {
// 			reject(e);
// 		}
// 	}, 1000);
// });
// doSomethingAsync([]).then(arr1 => doSomethingAsync(arr1).then(arr2 => doSomethingAsync(arr2).then(arr3 => console.log(arr3)))).catch(e => console.log(e));
// doSomethingAsync([]).then(doSomethingAsync).then(doSomethingAsync).then(arr => console.log(arr)).catch(e => console.log(e));
// const promiseAll = Promise.all([
// 	doSomethingAsync([]),
// 	doSomethingAsync([]),
// 	doSomethingAsync([]),
// ]).then(arr => console.log(JSON.stringify(arr))).catch(e => console.log(e));
// const promiseWon = Promise.race([
// 	doSomethingAsync([1]),
// 	doSomethingAsync([2]),
// 	doSomethingAsync([3]),
// ]).then(value => console.log(value)).catch(e => console.log(e));
// function* bar() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// 	yield 4;
// 	yield 5;
// 	return 6
// }
// const generator = bar();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// const doSomethingAsync = (arr: number[]) => new Promise<number[]>((resolve, reject) => {
// 	setTimeout(() => {
// 		try {
// 			const n = Math.ceil(Math.random() * 100 + 1);
// 			if (n < 25) throw new Error("n is < 25");
// 			resolve([...arr, n]);
// 		} catch (e) {
// 			reject(e);
// 		}
// 	}, 1000);
// });
// let counter = 0;
// function doSomethingAsync() { return new Promise<number>((r) => { setTimeout(() => { counter += 1; r(counter); }, 1000); }); }
// async function* g1() {
// 	yield await doSomethingAsync();
// 	yield await doSomethingAsync();
// 	yield await doSomethingAsync();
// }
// const i: AsyncIterableIterator<number> = g1();
// i.next().then(n => console.log(n));
// i.next().then(n => console.log(n));
// i.next().then(n => console.log(n));
// function* g2() { yield 2; yield 3; yield 4; }
// async function func() { for await (const x of g2()) { console.log(x); } }
// (async () => { await func(); })()
// function* g1() { yield 2; yield 3; yield 4; }
// function* g2() { yield 1; yield* g1(); yield 5; }
// var iterator1 = g2();
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());
class Person {
    constructor(name, surname) { this.name = name; this.surname = surname; }
    greet(city, country) { let msg = `Hi, my name is ${this.name} ${this.surname}.`; msg += `I'm from ${city} (${country}).`; console.log(msg); }
}
const person = new Person("remo", "Jansen");
person.greet.apply(person, ["seoul", "korea"]);
person.greet.call(person, "seoul", "korea");
//# sourceMappingURL=practice.js.map