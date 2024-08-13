//
//
//Assignments
//
//     1. Accept a char input from the user and display it on the console.
//Code of the program & screenshot of the output.
//      2. Accept two inputs from the user and output their sum.
//
//Variable
//Data Type
//Number 1
//number
//Number 2
//number
//Sum
//number

// Taking 2 input value and giving sum using interface
// interface Point {
//   x: number;
//   y: number;
// }

// function sum(p: Point): number {
//   return p.x + p.y;
// }

// const num = { x: 5, y: 10 };

// const result = sum(num);
// console.log(result, "result is showing");

// // Without interface normal method

// function sum2(x: number, y: number): number {
//   return x + y;
// }
// const result1 = sum2(4, 8);
// console.log(result1, "result1 is showing");

//
//Code of the program & screenshot of the output.
//      3. Write a program to find the simple interest.
//Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)
//Variable
//Data Type
//Principal amount (P)
//number
//Interest rate (R)
//number
//Number of years (n)
//number
//Simple Interest (SI)
//number
//
const P = 1000;
const R = 5; // %
const n = 2;

function simpleInterest(P: number, R: number, n: number) {
  let SI: number = (P * R * n) / 100;
  return SI;
}

const SI = simpleInterest(P, R, n);
console.log(SI, "Simple interest is showing");

//Code of the program & screenshot of the output.
//       4. Write a program to check whether a student has passed or failed in a subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).
//Program should accept an input from the user and output a message as “Passed” or “Failed”
//Variable
//Data type
//mark
//number
//
//
//
//Code of the program & screenshot of the output.
//      5. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
//Program should accept an input from the user and display their grade as follows
//Mark
//Grade
//> 90
//A
//80-89
//B
//70-79
//C
//60-69
//D
//50-59
//E
//< 50
//Failed
//
//
//Variable
//Data type
//Total mark
//number
//
//
//
//Code of the program & screenshot of the output.


// function grade(mark:number) {
//  switch (mark){
//   case:mark >= 90
//  }

// }

//      6. Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows.
//
//Input
//Output
//1
//Sunday
//2
//Monday
//3
//Tuesday
//4
//Wednesday
//5
//Thursday
//6
//Friday
//7
//Saturday
//Any other input
//Invalid Entry
//
//
//
//Code of the program & screenshot of the output.
//      7. Write a program to print the multiplication table of given numbers.
//Accept an input from the user and display its multiplication table
//Eg:
//Output: Enter a number
//Input: 5
//Output:
//1 x 5 = 5
//2 x 5 = 10
//3 x 5 = 15
//4 x 5 = 20
//5 x 5 = 25
//6 x 5 = 30
//7 x 5 = 35
//8 x 5 = 40
//9 x 5 = 45
//10 x 5 = 50
//Code of the program & screenshot of the output.
//      8. Write a program to find the sum of all the odd numbers for a given limit
//Program should accept an input as limit from the user and display the sum of all the odd numbers within that limit
//For example if the input limit is 10 then the result is 1+3+5+7+9 = 25
//Output: Enter a limit
//Input: 10
//Output: Sum of odd numbers = 25
//
//
//Code of the program & screenshot of the output.
//       9. Write a program to print the following pattern (hint: use nested loop)
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
//
//
//Code of the program & screenshot of the output.
//     10. Write a program to interchange the values of two arrays.
//Program should accept an array from the user, swap the values of two arrays and display it on the console
//Eg: Output: Enter the size of arrays
//Input: 5
//Output: Enter the values of Array 1
//Input: 10, 20, 30, 40, 50
//Output: Enter the values of Array 2
//Input: 15, 25, 35, 45, 55
//Output: Arrays after swapping:
//Array1: 15, 25, 35, 45, 55
//Array2: 10, 20, 30, 40, 50
//Code of the program & screenshot of the output.
//      11. Write a program to find the number of even numbers in an array
//Program should accept an array and display the number of even numbers contained in that array
//Eg: Output: Enter the size of an array
//Input: 5
//Output: Enter the values of array
//Input: 11, 20, 34, 50, 33
//Output: Number of even numbers in the given array is 3
//Code of the program & screenshot of the output.
//       12. Write a program to sort an array in descending order
//Program should accept and array, sort the array values in descending order and display it
//Eg: Output: Enter the size of an array
//Input: 5
//Output: Enter the values of array
//Input: 20, 10, 50, 30, 40
//Output: Sorted array:
//50, 40, 30, 20, 10
//Code of the program & screenshot of the output.
//      13. Write a program to identify whether a string is a palindrome or not
//A string is a palindrome if it reads the same backward or forward eg: MALAYALAM
//Program should accept a string and display whether the string is a palindrome or not
//Eg: Output: Enter a string
//Input: MALAYALAM
//Output: Entered string is a palindrome
//Eg 2: Output: Enter a string
//Input: HELLO
//Output: Entered string is not a palindrome
//Code of the program & screenshot of the output.
//      14. Write a program to add to two dimensional arrays
//Program should accept two 2D arrays and display its sum
//Eg: Output: Enter the size of arrays
//Input: 3
//Output: Enter the values of array 1
//Input:
//1 2 3
//4 5 6
//7 8 9
//Output: Enter the values of array 2
//Input:
//10 20 30
//40 50 60
//70 80 90
//Output: Sum of 2 arrays is:
//11 22 33
//44 55 66
//77 88 99
//Code of the program & screenshot of the output.
//      15. Write a program to accept an array and display it on the console using functions
//Program should contain 3 functions including main() function
//main()
//Declare an array
//Call function getArray()
//Call function displayArray()
//		getArray()
//Get values to the array
//		displayArray()
//Display the array values
//Code of the program & screenshot of the output.
//      16. Write a program to check whether a given number is prime or not
//Program should accept an input from the user and display whether the number is prime or not
//Eg: Output: Enter a number
//Input: 7
//Output: Entered number is a Prime number
//Code of the program & screenshot of the output.
//        17. Write a menu driven program to do the basic mathematical operations such as addition, subtraction, multiplication and division (hint: use if else ladder or switch)
//Program should have 4 functions named addition(), subtraction(), multiplication() and division()
//Should create a class object and call the appropriate function as user prefers in the main function
//Code of the program & screenshot of the output.
//       18. Grades are computed using a weighted average. Suppose that the written test counts 70%,  lab exams 20% and assignments 10%.
//If Arun has a score of
//Written test = 81
//Lab exams = 68
//Assignments = 92
//Arun’s overall grade = (81x70)/100 + (68x20)/100 + (92x10)/100 = 79.5
// Write a program to find the grade of a student during his academic year.
//Program should accept the scores for written test, lab exams and assignments
//Output the grade of a student (using weighted average)
//Eg:
//Enter the marks scored by the students
//Written test = 55
//Lab exams = 73
//Assignments = 87
//Grade of the student is 61.8
//Code of the program & screenshot of the output.
//       19. Income tax is calculated as per the following table
//Annual Income
//Tax percentage
//Up to 2.5 Lakhs
//No Tax
//Above 2.5 Lakhs to 5 Lakhs
//5%
//Above 5 Lakhs to 10 Lakhs
//20%
//Above 10 Lakhs to 50 Lakhs
//30%
//
//Write a program to find out the income tax amount of a person.
//Program should accept annual income of a person
//Output the amount of tax he has to pay
//
//Eg 1:
//Enter the annual income
//495000
//Income tax amount = 24750.00
//
//Eg 2:
//Enter the annual income
//500000
//Income tax amount = 25000.00
//
//
//Code of the program & screenshot of the output.
//       20. Write a program to print the following pattern using for loop
//1
//2	3
//4	5	6
//7	8	9	10
//
//
//Code of the program & screenshot of the output.
//       21. Write a program to multiply the adjacent values of an array and store it in an another array
//Program should accept an array
//Multiply the adjacent values
//Store the result into another array
//Eg:
//Enter the array limit
//5
//Enter the values of array
//1	2	3	4	5
//Output
//2	6	12	20
//Code of the program & screenshot of the output.
//       22. Write a program to add the values of two 2D arrays
//Program should contains 3 functions including the main function
//main()
//Call function getArray()
//Call function addArray()
//Call function displayArray()
//		getArray()
//Get values to the array
//		getArray()
//Add array 1 and array 2
//		displayArray()
//Display the array values
//
//Eg:
//Enter the size of array
//2
//Enter the values of array 1
//1	2
//3	4
//Enter the values of array 2
//5	6
//7	8
//Output:
//Sum of array 1 and array 2:
//6	8
//10	12
//Code of the program & screenshot of the output
//      23. Write an object oriented program to store and display the values of a 2D array
//Program should contains 3 functions including the main function
//main()
//Declare an array
//Call function getArray()
//Call function displayArray()
//		getArray()
//Get values to the array
//		displayArray()
//Display the array values
//Eg:
//Enter the size of array
//3
//Enter the array values
//1	2	3
//4	5	6
//7	8	9
//Array elements are:
//1	2	3
//4	5	6
//7	8	9
//
//
//Code of the program & screenshot of the output
//      24. Write a menu driven program to calculate the area of a given object.
//Program should contain two classes
//Class 1: MyClass
//Class 2: Area
//Class MyClass should inherit class Area and should contain the following functions
//main()
//circle()
//square()
//rectangle()
//triangle()
//Class Area should contain the following functions to calculate the area of different objects
//circle()
//square()
//rectangle()
//triangle()
//Class MyClass extends Area{
//public static void main(string args[]){
//}
//circle() {
//}
//square() {
//}
//rectangle() {
//}
//triangle() {
//}
//}
//Class Area{
//circle(){
//}
//square(){
//}
//rectangle() {
//}
//triangle() {
//}
//}
//
//Eg 1:
//Enter your choice
//Circle
//Square
//Rectangle
//Triangle
//2
//Enter the length
//2
//Output
//Area of the square is: 4
//
//Eg 2:
//Enter your choice
//Circle
//Square
//Rectangle
//Triangle
//1
//Enter the radius
//3
//Output
//Area of the circle is: 28.26
//Code of the program & screenshot of the output
//    25. Write a Javascript program to display the status (I.e. display book name, author name & reading status) of books. You are given an object library in the code's template. It contains a list of books with the above mentioned properties.Your task is to display the following:
//If the book is unread:
//You still need to read '<book_name>' by <author_name>.
//If the book is read:
//Already read '<book_name>' by <author_name>.
//var library = [
//    {
//        title: 'Bill Gates',
//        author: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        title: 'Steve Jobs',
//        author: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        readingStatus: false
//    }
//];
//Code of the program & screenshot of the output.
// 26. Given a variable named my_string, try reversing the string using  my_string.split().reverse().join() and then print the reversed string to the console. If the try clause has an error, print the error message to the console. Finally, print the typeof of the my_string variable to the console.
//Output format:
//           The statement to print in the tryblock is:
//Reversed string is : ${my_string}
//           The statement to print in the catchblock is:
//Error : ${err.message}
//           The statement to print in the finally block is:
//Type of my_string is : ${typeof my_string}
//
//Eg:
//            a) Sample Input 0
//           "1234"
//            Sample Output 0
//           Reversed string is : 4321
//           Type of my_string is : string
//            b) Sample Input 1
//          Number(1234)
//            Sample Output 1
//          Error : my_string.split is not a function
//                      Type of my_string is : number
//Code of the program & screenshot of the output.
//      27. Given a variable named my_height, you must throw errors under the following conditions:
//notANumberError- When my_heightis NaN
//HugeHeightError – When my_heightis greater than
//TinyHeight Error - When my_heightis less than
//          Eg:
//             a) Sample Input 0
//                       seven
//             Sample Output 0
//                       notANumberError
//             b) Sample Input 1
//                        77
//             Sample Output 1
//                        hugeHeightError
//             c) Sample Input 2
//                        0
//             Sample Output 2
//                        tinyHeightError
//             d) Sample Input 3
//
//                        8
//
//              Sample Output 3
//
//                        8
//Code of the program & screenshot of the output.
//      28. Create a constructor function that satisfies the following conditions:
//The name of the constructor function should be Car.
//It should take three parameters: name, mileage and max_speed.
//Store these parameter values in their respective thiskeywords: this.name, this.mileage and this.max_speed.
//Code of the program & screenshot of the output.
//    29.  Write a myFilter function that takes 2 parameters: myArray and callback. Here, myArray is an array of numbers and callback is a function that takes the elements of myArray as its parameter and returns a boolean true if the sum of the number is even or   false if the sum of the number  is odd.
//
//The myFilter function should return the sum of the array.
//
//Sample Input
//        12345
//Sample Output
//        15
//
//Code of the program & screenshot of the output.
//
//
//
