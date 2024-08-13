// Code completion refactoring Type checking

// Drawback there will be always be a compilation step
// We are compile and translate into js this process is called Transpilation
// Disciple

//let age: number = 30;

// types in typescript
// any
// unknown
// never
// tuples
// enum
//
//let sales: number = 2346789;
//let course: string = 'Typescript '
//let is_published: boolean = true
//
// Any type

//let level;
//
//level = 1;
//level = 'a'

// Try to avoid 'any' at any cost becuse it doesnot do the type checking

//function render(document){
//  console.log(document);
//
//}

// Arrays
//let number: number[] = [1,3,5]
//
//// Tuples
//let islw : [number,string];
//islw = [1,'hello']
//console.log(islw,'islw');
//

//const enum Size {  // If we use const keyword infront of enum it will give more optimized code
//  Small = 1,
//  Medium,
//  Large
//}
//
//console.log(Size.Large);
//
//let size = Size.Large;
//console.log(size,'size is showing');
//
//
//function calulateTax(income:number,taxYear:number): number {
//  if(taxYear < 2022){
//    return income * 1.2
//  }
//  return income * 1.3
//}
//
//calulateTax(10_000,2022)

//Object
//While we are setting like this complier says that every Object need to have an id and name while initializing it
// Two option
// One is set name to an empty string '' or we can make that key optional so we doesnot need to supply
// We cannot

//let employe: {
//  readonly id: number;
//  name: string;
//  retire: (date: Date) => void;
//} = {
//  id: 1,
//  name: "Shane",
//  retire: (date: Date) => {
//    console.log(date);
//  },
//};

//type Employee = {
//  readonly id: number;
//  name: string;
//  retire: (date: Date) => void;
//};
//
//let employe: Employee = {
//  id: 1,
//  name: "Suhail",
//  retire: (date: Date) => {
//    console.log(date);
//  },
//};

//Union Types

//function kgToLbs(weight: number | string): number | string{
//  // Narrowing
//  if(typeof weight === 'number'){
//    return weight.toFixed(2)
//  }else {
//    return weight.toString()
//  }
//}

//type Draggable = {
//  drag:() => void
//}
//
//type Resizable = {
//  resize: () => void
//}
//
//type UIWidget = Draggable & Resizable;
//
//let textBox: UIWidget = {
//  drag:()=> {},
//  resize:()=>{}
//}
//

// Liteals (exact,specific)
//type Quantity = 50 | 100
//let quantity : 50 | 100 = 50;
//
// Nullable type
//function greet(name: string | null ) {
//  if(name){
//  console.log(name.toUpperCase());
//  }else{
//    console.log('Hola!');
//  }
//}
//
//greet(null)

// Optional Chaining

//type Customer = {
//  birthday: Date;
//};
//
//function getConstumer(id: number): Customer | null | undefined{
//  return id === 0 ? null : { birthday: new Date() };
//}
//
//let customer = getConstumer(0);
//// optional property access property
// console.log(customer?.birthday);
//
// // Optional element access operator
// // customer?.[0]
//
// // Optional call
// let log: any  = null
// log('a')

// Interface in typescript

//interface Users {
//  readonly dbId: number,
//  email: string;
//  userId: number;
//  googleId?: string;
//  //startTrail: ()=>string; // there are two way
//  startTrail():string;
//  getCoupon(couponName:string,value:number):number
//}
//
//const appu: Users = {
//  dbId: 123,
//  email: "app@gm.com",
//  userId: 1122,
//  startTrail:()=>'started',
//  getCoupon(name:"FEE",off:10)=>{
//    return 10
//  }
//}

// Interface uniqueness
// Addining more properties

//interface Users {
//  readonly dbId: number;
//  email: string;
//  userId: number;
//  googleId?: string;
//  //startTrail: ()=>string; // there are two way
//  startTrail(): string;
//  //getCoupon(couponName:string,value:number):number
//}
//
//interface Users {
//  githubToken: string;
//}
//
//const appu: Users = {
//  dbId: 123,
//  email: "app@gm.com",
//  userId: 1122,
//  startTrail: () => "started",
//  githubToken: "token",
//};
//
//interface Admin extends Users {
//  role: "admin" | "ta" | "learn";
//}
//
//const arshu: Admin = {
//  dbId: 123,
//  email: "app@gm.com",
//  userId: 1122,
//  startTrail: () => "started",
//  githubToken: "token",
//  role: "admin",
//};
//
// Diff btw types and interface
// Types cannot be changed after declared if we add new field to existing interface it will add that field
//

// Classes in TypeScript
//
//class UserData {
//  public email: string;
//  private name: string;
//  private readonly city: string = "Kerala"
//  constructor(email: string, name: string) {
//    this.email = email;
//    this.name = name;
//    this.city
//  }
//}
//
//const aswin = new UserData("a@g.com", "aswin");
//aswin.name
//aswin.city = "hello"

//class UserData {
//
//  private _courseCount = 1;
//
//  readonly city: string = "Kerala";
//  constructor(public email: string) {
//    this.email = email;
//    //this.name = name;
//  }
//
//  get getAppleEmail(): string {
//    return `apple${this.email}`;
//  }
//
//  get courseCount(): number {
//    return this._courseCount;
//  }
//
//  set courseCount(couseNum){
//    if(couseNum <= 1){
//      throw new Error("Course count shoule be more than 1")
//    }
//    this._courseCount = couseNum
//  }
//
//  private deleteToken(){
//    console.log("token deleted");
//  }
//}
//
//const jaggus = new UserData("jub");

// Private public and protect are called access modifiers
// protect variables can be accessibile within the class and any class which inherits this call also
//class UserList {
//  protected _courseCount = 1
//  constructor(public email:string){
//    this.email = email
//  }
//}
//
//class subUser extends UserList {
// changeCourse(){
//   this._courseCount = 5;
// }
//}

// Interface Why it is important

//interface TakePhoto {
//  cameraMode: string;
//  filter: string;
//  burst: number;
//}
//
//interface Story {
//  createStory(): void
//}
//class Instagram implements TakePhoto {
//  constructor(
//    public cameraMode: string,
//    public filter: string,
//    public burst: number,
//  ) {}
//}
//
//class Youtube implements TakePhoto,Story {
//  constructor(
//    public cameraMode: string,
//    public filter: string,
//    public burst: number,
//    public shorts: string,
//  ) {}
//  createStory(): void {
//     console.log("hello world");
//
//  }
//}

// Abstract Class

class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
  ) {}
}
