//**Question:**
//
//Create an interface `vehicle` in Go that defines two methods: `speed()` and `fuel()`. Then, implement two types, `car` and `bike`, that satisfy the `vehicle` interface. 
//
//The `car` type should have fields `model` (string) and `horsepower` (int), and the `bike` type should have fields `brand` (string) and `cc` (int).
//
//* The `speed()` method for the `car` type should return a float64 value representing the speed as `(float64(horsepower) * 2)`.
//* The `fuel()` method for the `car` type should return a string value indicating the fuel type as `"Petrol"`.
//
//* The `speed()` method for the `bike` type should return a float64 value representing the speed as `(float64(cc) * 1.5)`.
//* The `fuel()` method for the `bike` type should return a string value indicating the fuel type as `"Petrol"`.
//
//Finally, write a function `checkPerformance(v vehicle)` that prints the speed and fuel type of the passed `vehicle`.
//
//**Expected Output:**
//
//When you create a `car` and a `bike` instance and pass them to the `checkPerformance` function, you should see the output of their respective speed and fuel type.
//


interface User {
  name: string;
  age:  number;
}

function hello (user: User){
  console.log(user.age,'age','and',user.name,'name');
  
}

const userDetails1 : User = {
  name: 'Celestine',
  age: 24
}

hello(userDetails1)
const userDetails2 : User = {
  name: 'Adithyan',
  age: 22,
}


