const num : number = 12

const user : string = 'Hello World'

const username = 'Arshu'

function greeting(name:string):string {
  return `Good evening ${name}`
}

const greets = greeting(username)

console.log(greets);

// Defining Types
// We are creating an object with an inferred type which includes name:string and id:number
const userDetail = {
  name: "Arshu",
  id:0,
}


// Then we can explicitly describe this object's shape using an Interface declaration

interface User {
  name: string;
  id: number;
}

// In this case the if ojbect doesn't match the interface we have provided , TypeScript will warn us
const userDetailWithInterface: User= {
 name: "Justin",
 id: 0,
}


class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
   this.name = name;
   this.id = id;
  }
}

const User: User = new UserAccount("Murphy",1)
console.log(User,'User is showing');

// Generics Types 
// Generics provide variables to types . A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{name: string}>;
