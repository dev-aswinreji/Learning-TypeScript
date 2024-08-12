const num: number = 12;

const user: string = "Hello World";

const username = "Arshu";

function greeting(name: string): string {
  return `Good evening ${name}`;
}

const greets = greeting(username);

console.log(greets);

// Defining Types
// We are creating an object with an inferred type which includes name:string and id:number
const userDetail = {
  name: "Arshu",
  id: 0,
};

// Then we can explicitly describe this object's shape using an Interface declaration

interface User {
  name: string;
  id: number;
}

// In this case the if ojbect doesn't match the interface we have provided , TypeScript will warn us
const userDetailWithInterface: User = {
  name: "Justin",
  id: 0,
};

class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const User: User = new UserAccount("Murphy", 1);
console.log(User, "User is showing");

// Generics Types
// Generics provide variables to types . A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const array: StringArray = ["hello", "hai"];
// Need to learn Structural Type System
// One of TypeScript's core principles is that type checking focuses on the shape that values have. This is sometimes call "duck typing" or "structural typing".

// In a structural type System , if two objects have the same shape, they are considered to be to the same type

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}`, `${p.y}`);
}
// In this case the point variable is never declared to be Point type. However , TypeScript compares the shape of point of the shape of Point in the type-check . They have the same shape, so the code passed.

//The shape-matching only requires a subset of the object's fields to match.

const point1 = { x: 34, y: 45, z: 89 };
logPoint(point1);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVirtPoint = new VirtualPoint(1, 3);
logPoint(newVirtPoint);

// An enum is a special "class" that represents a group of constants (unchangable variables ). Enums come in two flavors string and numeric

enum  myEnum {
  firstConst = 'first',
  secondConst = 'second'
} 

console.log(myEnum.firstConst,'firstConst');

