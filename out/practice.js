"use strict";
// const add = (a: number, b: number): number => a + b;
// const addMany = (...args: number[]): number => args.reduce(add, 0);
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
// class Street {
//   public readonly num: number;
//   public readonly name: string;
//   public constructor(num: number, name: string) {
//     this.num = num;
//     this.name = name;
//   }
// }
// class Address {
//   public readonly city: string;
//   public readonly street: Street;
//   public constructor(city: string, street: Street) {
//     this.city = city;
//     this.street = street;
//   }
// }
// interface Lens<T1, T2> {
//   get(o: T1): T2;
//   set(o: T2, v: T1): T1;
// }
// function composeLens<A, B, C>(
//   ab: Lens<A, B>,
//   bc: Lens<B, C>
// ): Lens<A, C> {
//   return {
//     get: (a: A) => bc.get(ab.get(a)),
//     set: (c: C, a: A) => ab.set(bc.set(c, ab.get(a)), a)
//   };
// }
// const streetLens: Lens<Address, Street> = {
//   get: (o: Address) => o.street,
//   set: (v: Street, a: Address) => new Address(a.city, v)
// }
// const nameLense: Lens<Street, string> = {
//   get: (o: Street) => o.name,
//   set: (v: string, o: Street) => new Street(o.num, v)
// }
// const streetNameLens = composeLens(streetLens, nameLense);
// const overLens = <S, A>(
//   lens: Lens<S, A>,
//   fn: (a: A) => A,
//   s: S
// ) =>
//   lens.set(fn(lens.get(s)), s);
// type Prop<T, K extends keyof T> = (o: T) => T[K];
// type Assoc<T, K extends keyof T> = (v: T[K], o: T) => T;
// const propStreet: Prop<Address, "street"> = (o: Address) => o.street;
// const assocStreet: Assoc<Address, "street"> = (v: Address["street"], o: Address) => new Address(o.city, v);
// const lens = <T1, K extends keyof T1>(
//   getter: Prop<T1, K>,
//   setter: Assoc<T1, K>,
// ): Lens<T1, T1[K]> => {
//   return {
//     get: (obj: T1) => getter(obj),
//     set: (val: T1[K], obj: T1) => setter(val, obj),
//   };
// }
// const streetLens2 = lens(propStreet, assocStreet);
// const view = <T1, T2>(lens: Lens<T1, T2>, obj: T1) => lens.get(obj);
// const set = <T1, K extends keyof T1>(lens: Lens<T1, T1[K]>, val: T1[K], obj: T1) => lens.set(val, obj);
// const address = new Address(
//   "London",
//   new Street(1, "rathbone square")
// );
// const street = view(streetLens, address);
// const address2 = set(
//   streetLens,
//   new Street(
//     address.street.num,
//     address.street.name.toUpperCase()
//   ),
//   address
// );
// type Prop<T, K extends keyof T> = (o: T) => T[K];
// type Assoc<T, K extends keyof T> = (v: K, o: T) => T
// class Listener<T> {
//   public update: (message: T) => void;
//   public constructor(fn: (message: T) => void) {
//     this.update = fn;
//   }
// }
// class Producer<T> {
//   private _listeners: Listener<T>[] = [];
//   public add(listener: Listener<T>) {
//     this._listeners.push(listener);
//   }
//   public remove(listener: Listener<T>) {
//     this._listeners = this._listeners.filter(l => l !== listener);
//   }
//   public notify(message: T) {
//     this._listeners.forEach(l => l.update(message));
//   }
// }
// const listener1 = new Listener((message: string) => console.log(`Listener1: ${message}`));
// const listener2 = new Listener((message: string) => console.log(`Listener2: ${message}`));
// const notify = new Producer<string>();
// notify.add(listener1);
// notify.add(listener2);
// notify.notify("Hello World!");
// function* iterateOnMultiples(arr: number[], divisor: number) {
//   for (let item of arr) {
//     if (item % divisor === 0) yield item;
//   }
// }
// const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const iterator1 = iterateOnMultiples(numberArr, 3);
// const iteratorResult1 = iterator1.next();
// console.log(iteratorResult1.value);
// if (!iteratorResult1.done) console.log(iterator1.next().value);
// const iterator2 = iterateOnMultiples(numberArr, 3)
// for (let value of iterator2) console.log(value);
// import { of } from "rxjs";
// const observable = of(1);
// const subscription = observable.subscribe((value) => console.log(value), (error: any) => console.log(error), () => console.log("Done!"));
// subscription.unsubscribe();
// import { from } from "rxjs";
// const observable = from([10, 20, 30]);
// const subscription = observable.subscribe(value => console.log(value), err => console.log(err), () => console.log("Done!"));
// subscription.unsubscribe();
// import { interval } from "rxjs";
// const observable = interval(10);
// const subscription = observable.subscribe(value => console.log(value), err => console.log(err), () => console.log("Done!"));
// subscription.unsubscribe();
// import { fromEvent } from "rxjs"
// const observable = fromEvent(document, "click");
// const subscription = observable.subscribe((value) => console.log(value));
// subscription.unsubscribe();
// import { bindCallback } from "rxjs";
// import fetch from "node-fetch";
// const getJSON = (url: string, cb: (response: unknown | null) => void) => {
//   fetch(url)
//     .then(response => response.json())
//     .then(json => cb(json))
//     .catch(_ => cb(null));
// }
// const uri = "https://jsonplaceholder.typicode.com/todos/1";
// const observableFactory = bindCallback(getJSON);
// const observable = observableFactory(uri);
// const subscription = observable.subscribe((value) => console.log(value), (error: any) => console.log(error), () => console.log("Done!"));
// subscription.unsubscribe();
// import { bindNodeCallback } from "rxjs";
// import * as fs from "fs";
// const observableFactory = bindNodeCallback(fs.readFile);
// const observable = observableFactory("./roadNames.txt");
// const subscription = observable.subscribe(value => console.log(value.toString()), (error: any) => console.log(error), () => console.log("Done!"));
// subscription.unsubscribe();
// import { bindCallback, from } from "rxjs";
// import { map } from "lodash";
// import fetch from "node-fetch";
// const uri = "https://jsonplaceholder.typicode.com/todos/1"
// const observable = from(fetch(uri));
// const subscription = observable.subscribe(value => console.log(value.toString()));
// subscription.unsubscribe();
// import { from } from "rxjs";
// import { max } from "rxjs/operators";
// const observable = from<number[]>([2, 30, 22, 5, 60, 1]);
// observable.pipe(max());
// const subscription = observable.subscribe(console.log);
// subscription.unsubscribe();
// import { from } from "rxjs";
// import { filter } from "rxjs/operators";
// const observable = from([1, 2, 3, 4, 5]);
// observable.pipe(filter(x => x < 10));
// const subscription = observable.subscribe(console.log);
// subscription.unsubscribe();
// import { fromEvent, interval } from "rxjs";
// import { throttle, mapTo, scan } from "rxjs/operators"
// const observable = fromEvent(document, "click")
//   .pipe(mapTo(1))
//   .pipe(throttle(x => interval(100)))
//   .pipe(scan((acc, one) => acc + one, 0));
// const subscription = observable.subscribe(value => console.log)
// import { from } from "rxjs";
// import { merge } from "rxjs/operators"
// const observableA = from([20, 40, 60, 80, 100]);
// const observableB = from([1, 1]);
// const observableC = observableA.pipe(merge(observableB));
// const subscription = observableC.subscribe(console.log);
// subscription.unsubscribe();
// import { from } from "rxjs";
// import { zip } from "rxjs/operators";
// const observableA = from([1, 2, 3, 4, 5]);
// const observableB = from(["A", "B", "C", "D"]);
// const observableC = observableA.pipe(zip(observableB));
// const subscription = observableC.subscribe(console.log, null, () => console.log("Done!"));
// subscription.unsubscribe();
// import R from "ramda";
// const trim = (s: string) => s.trim();
// const capitalize = (s: string) => s.toUpperCase();
// const trimAndCapitalize = R.compose(trim, capitalize);
// const result = trimAndCapitalize(" hello wrold ")
// console.log(result);
// import R from "ramda";
// const trim = (s: string) => s.trim();
// const capitalize = (s: string) => s.toUpperCase();
// const replace = (s: string, f: string, r: string) => s.split(f).join(r);
// const trimCapitalizeAndReplace = R.compose(R.compose(trim, capitalize), R.curry(replace)("/")("-"));
// const result = trimCapitalizeAndReplace(" 13/feb/1989 ");
// console.log(result); // "13-FEB-1989"
// import R from "ramda";
// class Street {
//   public readonly num: number;
//   public readonly name: string;
//   public constructor(num: number, name: string) {
//     this.num = num;
//     this.name = name;
//   }
// }
// class Address {
//   public readonly city: string;
//   public readonly street: Street;
//   public constructor(city: string, street: Street) {
//     this.city = city;
//     this.street = street;
//   }
// }
// const streetLens = R.lensProp("street");
// const address = new Address(
//   "London",
//   new Street(1, "rathbone square")
// );
// const street = R.view<Address, Street>(streetLens, address);
// const address2 = R.set<Address, Street>(
//   streetLens,
//   new Street(address.street.num,
//     R.toUpper(address.street.name)
//   ),
//   address
// )
// console.log(street);
// console.log(address2);
// import { Record } from "immutable";
// interface StreetInterface {
//   num: number;
//   name: string;
// }
// const StreetRecord = Record({
//   num: 0,
//   name: ""
// })
// class Street extends StreetRecord implements StreetInterface {
//   constructor(props: StreetInterface) {
//     super(props);
//   }
// }
// interface AddressInterface {
//   city: string;
//   street: Street;
// }
// const AddressRecord = Record({
//   city: "",
//   street: new Street({ num: 0, name: "" })
// });
// class Address extends AddressRecord implements AddressInterface {
//   constructor(props: AddressInterface) {
//     super(props);
//   }
// }
// const address = new Address({
//   city: "London",
//   street: new Street({
//     num: 1,
//     name: "rathbone square"
//   })
// })
// const street = address.get("street");
// const street2 = street.set("name", "Rathbone square");
// const address2 = address.set("street", street2);
// console.log(address.toJS(), address2.toJS())
// import produce from "immer";
// class Street {
//   public readonly num: number;
//   public readonly name: string;
//   public constructor(num: number, name: string) {
//     this.num = num;
//     this.name = name;
//   }
// }
// class Address {
//   public readonly city: string;
//   public readonly street: Street;
//   public constructor(city: string, street: Street) {
//     this.city = city;
//     this.street = street;
//   }
// }
// const address = new Address("London", new Street(1, "rathbone square"));
// const address2 = produce(address, draftAddress => {
//   draftAddress.street.name = "Rathbone square";
// })
const R = __importStar(require("ramda"));
const funfix_1 = require("funfix");
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs = __importStar(require("fs"));
var funfix_demo_1;
(function (funfix_demo_1) {
    const argsIO = funfix_1.IO.of(() => R.tail(R.tail(process.argv))[0]);
    const readFile = (filename) => funfix_1.IO.of(() => fs.readFileSync(filename, "utf8"));
    const stdoutWrite = (data) => funfix_1.IO.of(() => process.stdout.write(data));
    const loudCat = argsIO.chain(readFile)
        .map(R.toUpper)
        .chain(stdoutWrite);
    try {
        loudCat.run();
    }
    catch (e) {
        console.log(e);
    }
})(funfix_demo_1 || (funfix_demo_1 = {}));
var funfix_demo_2;
(function (funfix_demo_2) {
    const getTodos = funfix_1.IO.async((ec, cb) => {
        node_fetch_1.default("https://jsonplaceholder.typicode.com/todos").then(response => {
            return response.json().then((json) => cb(funfix_1.Success(funfix_1.Right(json))));
        })
            .catch(err => cb(funfix_1.Failure(funfix_1.Left(err))));
    });
    const logTodos = getTodos.map((either) => {
        return either.map(todos => todos.map(t => console.log(t.title)));
    });
    logTodos.run();
})(funfix_demo_2 || (funfix_demo_2 = {}));
//# sourceMappingURL=practice.js.map