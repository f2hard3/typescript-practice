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


// class Person { public name: string; public surname: string; public constructor(name: string, surname: string) { this.name = name; this.surname = surname; } public greet(city: string, country: string) { let msg = `Hi, my name is ${this.name} ${this.surname}.`; msg += `I'm from ${city} (${country}).`; console.log(msg); } }

// const person = new Person("remo", "Jansen");

// person.greet.apply(person, ["seoul", "korea"]);
// person.greet.call(person, "seoul", "korea");

// const name1 = "Remo";
// const surname1 = "Jansen";
// function Person(name, surname) {
//   // instance properties 
//   this.name = name;
//   this.surname = surname;
// }
// const person1 = new Person(name1, surname1);
// // person1.age = 27;

// Person.prototype.age = 28;
// Person.prototype.surname = surname1;

// console.log(JSON.stringify(person1.age));

// for (const property in person1) console.log("property: ", property, " value: ", person1[property]);

// function makeArmy() {
//   const shooters = [];
//   for (let i = 0; i < 10; i++) {
//     const shooter = () => {
//       console.log(i);
//     };
//     shooters.push(shooter);
//   }
//   return shooters;
// }

// const army = makeArmy();
// army[0]();
// army[5]();
// army[9]();

// const trim = (s: string) => s.trim();
// const capitalize = (s: string) => s.toUpperCase();

// const trimAndCapitalize = (s: string) => capitalize(trim(s));

// console.log(trimAndCapitalize("    hello world    "));

// const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));

// const trimAndCapitalize = compose(trim, capitalize);

// console.log(trimAndCapitalize("    hello world    "));

// const compose = <T1, T2, T3>(f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x))

// const composeMany = <T>(...functions: Array<(arg: T) => T>) => (arg: any) => functions.reduce((prev, curr) => { return curr(prev); }, arg);
// const composeMany = <T>(...args: Array<(x: T) => T>) => (x: T) => args.reduce((acc, cur) => cur(acc), x)

// const composed = composeMany(trim, capitalize);
// console.log(composed("    hello world    "));

// const add = (a: number) => (b: number) => a + b;
// const add3 = add(3);

// console.log(add3(10));

// const add = (a: number, b?: number) => b ? a + b : (b2: number) => a + b2;
// const add3 = add(3) as (b2: number) => number

// console.log(add3(10));

// const trim = (s: string) => s.trim();
// const capitalize = (s: string) => s.toUpperCase();

// const replace = (f: string, r: string) => (s: string) => s.split(f).join(r);
// const trimCapitalizeAndReplace = composeMany(trim, capitalize, replace("/", "-"));
// console.log(trimCapitalizeAndReplace("  13/feb/1989  "));

const add = (a: number, b: number) => a + b;
const multiply = (a: number, b: number) => a * b;
const curry2 = <T1, T2, T3>(fn: (x: T1, y: T2) => T3) => (x: T1) => (y: T2) => fn(x, y);
const curry3 = <T1, T2, T3, T4>(fn: (x: T1, y: T2, z: T3) => T4) => (x: T1) => (y: T2) => (z: T3) => fn(x, y, z);

// const curriedAdd = curry2(add);
// const add5 = curriedAdd(5);
// console.log(add5(10));

// const curriedMultiply = curry2(multiply);
// const multiply3 = curriedMultiply(3);
// console.log(multiply3(3));

// const composeMany = <T>(...args: Array<(x: T) => T>) => (x: T) => args.reduce((acc, cur) => cur(acc), x)
// const trim = (s: string) => s.trim();
// const capitalize = (s: string) => s.toUpperCase();

// const replace = (s: string, f: string, r: string) => s.split(f).join(r);

// const curriedReplace = curry3(replace);

// const trimCapitalizeAndReplace = composeMany(trim, capitalize, curriedReplace("/")("-"))


// const compose = <T1, T2, T3>(f: (x: T2) => T3, g: (x: T1) => T2) => (x: T1) => f(g(x)); 
// const trim = (s: string) => s.trim(); 
// const capitalize = (s: string) => s.toUpperCase(); 
// const trimAndCapitalize = compose(trim, capitalize); 
// const replace = (s: string, f: string, r: string) => s.split(f).join(r); 
// const replaceForwardSlashWithDash = replace.bind(replace, "/", "-"); 
// const trimCapitalizeAndReplace = compose(trimAndCapitalize, replaceForwardSlashWithDash);

interface Person { age: number; birthCountry: string; naturalizationDate: Date; }

// const OUR_COUNTRY = "Ireland";
// const wasBornInCountry = (person: Person) => person.birthCountry === OUR_COUNTRY;
// const wasNaturalized = (person: Person) => Boolean(person.naturalizationDate);
// const isOver18 = (person: Person) => person.age >= 18;
// const isCitizen = (person: Person) => wasBornInCountry(person) || wasNaturalized(person);
// const isEligibleToVote = (person: Person) => isOver18(person) && isCitizen(person);

// const either = <T1>(
//   funcA: (a: T1) => boolean,
//   funcB: (a: T1) => boolean
// ) => (arg: T1) => funcA(arg) || funcB(arg);

// const both = <T1>(
//   funcA: (a: T1) => boolean,
//   funcB: (a: T1) => boolean
// ) => (arg: T1) => funcA(arg) && funcB(arg);

// const OUR_COUNTRY = "Ireland";
// const wasBornInCountry = (person: Person) => person.birthCountry === OUR_COUNTRY;
// const wasNaturalized = (person: Person) => Boolean(person.naturalizationDate);
// const isOver18 = (person: Person) => person.age >= 18;
// const isCitizen = either<Person>(wasBornInCountry, wasNaturalized);
// const isEligibleToVote = both(isCitizen, isOver18);

// console.log(
//   isEligibleToVote({
//     age: 17,
//     birthCountry: "Ireland",
//     naturalizationDate: new Date()
//   })
// )

// const factorial = (n: number): number => (n === 0) ? 1 : n * factorial(n - 1);

// console.log(factorial(5));

// const enum ShapeKind {
//   circle = "circle",
//   square = "square",
//   rectangle = "rectangle"
// }

// type Circle = { kind: ShapeKind.circle, radius: number }
// type Square = { kind: ShapeKind.square, size: number }
// type Rectangle = { kind: ShapeKind.rectangle, w: number, h: number }

// type Shape = Circle | Square | Rectangle;

// const area = (shape: Shape) => {
//   switch (shape.kind) {
//     case ShapeKind.circle: return shape.radius ** 2 * 3.14
//     case ShapeKind.square: return shape.size ** 2
//     case ShapeKind.rectangle: return shape.w * shape.h
//     default: throw new Error("Invalid shape!");
//   }
// }

// class Container<T> {
//   private _value: T;

//   public constructor(val: T) {
//     this._value = val;
//   }

//   public map<TMap>(fn: (val: T) => TMap) {
//     return new Container<TMap>(fn(this._value));
//   }
// }

// const double = (x: number) => x + x;
// const container = new Container(3);
// const container2 = container.map(double);
// console.log(container2);

// class Container<T> {
//   public static of<TVal>(val: TVal) {
//     return new Container(val);
//   }

//   private _value!: T;

//   public constructor(val: T) {
//     this._value = val;
//   }

//   public map<TMap>(fn: (val: T) => TMap) {
//     return new Container<TMap>(fn(this._value));
//   }

//   public ap<TMap>(c: Container<(val: T) => TMap>) {
//     return c.map(fn => this.map(fn));
//   }
// }

// const double = (x: number) => x + x;
// const numberContainer = Container.of(3);
// const functionContainer = Container.of(double);

// console.log(numberContainer.map(double));

// console.log(numberContainer.ap(functionContainer));


// namespace maybe_demo_1 {

//   class MayBe<T> {

//     public static of<TVal>(val?: TVal) {
//       return new MayBe(val);
//     }

//     private _value!: T;

//     public constructor(val?: T) {
//       if (val) {
//         this._value = val;
//       }
//     }

//     public isNothing() {
//       return (this._value === null || this._value === undefined);
//     }

//     public map<TMap>(fn: (val: T) => TMap) {
//       if (this.isNothing()) {
//         return new MayBe<TMap>();
//       } else {
//         return new MayBe<TMap>(fn(this._value));
//       }
//     }

//     public ap<TMap>(c: MayBe<(val: T) => TMap>) {
//       return c.map(fn => this.map(fn));
//     }


//   }

//   interface New {
//     subreddit: string;
//     id: string;
//     title: string;
//     score: number;
//     over_18: boolean;
//     url: string;
//     author: string;
//     ups: number;
//     num_comments: number;
//     created_utc: number;
//   }

//   interface Response {
//     kind: string;
//     data: {
//       modhash: string;
//       whitelist_status: boolean | null;
//       children: Array<{ kind: string, data: New }>;
//       after: string | null;
//       before: string | null;
//     };
//   }

//   async function fetchNews() {
//     return new Promise<MayBe<Response>>((resolve, reject) => {
//       const url = "https://www.reddit.com/r/typescript/new.json";
//       fetch(url)
//         .then((response) => {
//           return response.json();
//         }).then((json) => {
//           resolve(new MayBe(json));
//         }).catch(() => {
//           resolve(new MayBe());
//         });
//     });
//   }

//   (async () => {

//     const maybeOfResponse = await fetchNews();

//     const maybeOfNews = maybeOfResponse
//       .map(r => r.data)
//       .map(d => d.children)
//       .map(children => children.map(c => c.data));

//     maybeOfNews.map((news) => {
//       news.forEach((n) => console.log(`${n.title} - ${n.url}`));
//       return news;
//     });

//   })();

// }

class Street {

  public readonly num: number;
  public readonly name: string;

  public constructor(num: number, name: string) {
    this.num = num;
    this.name = name;
  }

}

class Address {

  public readonly city: string;
  public readonly street: Street;

  public constructor(city: string, street: Street) {
    this.city = city;
    this.street = street;
  }

}

interface Lens<T1, T2> {
  get(o: T1): T2;
  set(o: T2, v: T1): T1;
}

function composeLens<A, B, C>(
  ab: Lens<A, B>,
  bc: Lens<B, C>
): Lens<A, C> {
  return {
    get: (a: A) => bc.get(ab.get(a)),
    set: (c: C, a: A) => ab.set(bc.set(c, ab.get(a)), a)
  };
}

const streetLens: Lens<Address, Street> = {
  get: (o: Address) => o.street,
  set: (v: Street, a: Address) => new Address(a.city, v)
}

const nameLense: Lens<Street, string> = {
  get: (o: Street) => o.name,
  set: (v: string, o: Street) => new Street(o.num, v)
}

const streetNameLens = composeLens(streetLens, nameLense);

const overLens = <S, A>(
  lens: Lens<S, A>,
  fn: (a: A) => A,
  s: S
) =>
  lens.set(fn(lens.get(s)), s);

type Prop<T, K extends keyof T> = (o: T) => T[K];
type Assoc<T, K extends keyof T> = (v: T[K], o: T) => T;

const propStreet: Prop<Address, "street"> = (o: Address) => o.street;
const assocStreet: Assoc<Address, "street"> = (v: Address["street"], o: Address) => new Address(o.city, v);

const lens = <T1, K extends keyof T1>(
  getter: Prop<T1, K>,
  setter: Assoc<T1, K>,
): Lens<T1, T1[K]> => {
  return {
    get: (obj: T1) => getter(obj),
    set: (val: T1[K], obj: T1) => setter(val, obj),
  };
}

const streetLens2 = lens(propStreet, assocStreet);

const view = <T1, T2>(lens: Lens<T1, T2>, obj: T1) => lens.get(obj);
const set = <T1, K extends keyof T1>(lens: Lens<T1, T1[K]>, val: T1[K], obj: T1) => lens.set(val, obj);

const address = new Address(
  "London",
  new Street(1, "rathbone square")
);

const street = view(streetLens, address);

const address2 = set(
  streetLens,
  new Street(
    address.street.num,
    address.street.name.toUpperCase()
  ),
  address
);