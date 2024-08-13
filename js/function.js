// function greet(){
//     //function body
//     console.log("Namaste everyone!")
// }
// greet();
// function add
// function add(){
//     let x = 1;
//     let y = 2;
// //  let z = x+y;
//     console.log(x+y)
// }
// add();
//function add
// console.log("addition function");
// function add(a,b){
//     console.log(a+b);
// }
// add(5,10);
// add(10,20);
// add(6,7);
//add function
function add({a,b}){
    console.log(a);
    console.log(b);
    console.log(a+b);
}
add({b:20,a:10});

// function subtract
console.log("subtract function");
function sub(a,b){
    console.log(a-b);
}
sub(9,7);
//function multiply
console.log("multiply function");
function mul(a,b){
    console.log(a*b);
}
mul(2,3);
//function divide
console.log("division function");
function div(a,b){
    console.log(a/b);
}
div(6,3);
//sum function
function sum(a,b){
    return a+b;//return gareko value hami  variable ma store garera rakhna sakcham
}
console.log(sum(10,20));
//function expression or anonymous function
let hello = function(){
    console.log("hello");
}
hello();
// arrow function
let greet =()=>{
 return("hello");
}
//4.function that reverse the string
// function reverseString(str) {
//     var newString = "";
//       for (var i = str.length - 1; i >= 0; i--) {
//       newString += str[i];
//       }
//       return newString;
//        }
//        reverseString("Skillspark");
       2.// function that Calculate average of an array
//        let sum=0;
//   let array=[1,2,3,4,5]
//   function average(array){
// for(i=0;i<=array.lengthl;i++){
//   sum+=array[i];
// average=sum/array.length;
// return average
// }
// console.log(average);
// }
//
// function reverse(str){
//       let newstring="";
//       for(let i=str.length-1;i>=0;i--){
//         newstring+=str[i];
//       }
//       return newstring;
//      }
//      reverse("skillspark");
     //leap year
//      let year=2020;
// function leapyear(year){
//   if(year %100===0 ; year %400=0 ; year%4===0)
//     console.log("Input year:" year ,"is leap year");
// } else {
//   console.log("not leap year");
// }
//function for odd even
function isEvenOrOdd(number) {
if (number % 2 === 0) {
    return "Even";
} else {
    return "Odd";
}
}
let number = 7;
console.log("The number is:", isEvenOrOdd(number)); 

number = 10;
console.log("The number is:", isEvenOrOdd(number)); 
// reverse function
function reverseString(str) {
    return str.split('').reverse().join('');
}


let originalString = "hello";
let reversedString = reverseString(originalString);
console.log("Reversed string is:", reversedString);
// function that calculates the average of an array of numbers
// const array =[10,20,30,40,50];
// function average(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum/arr.length;
// }
// const result = average(array);
// console.log(result);
//using for loop print 10 -1
function reversestring(str){
    let reverse="" ;
for(let i=str.length-1;i>=0; i--){
    reverse+=str[i];
}
return reverse;
}
console.log(reversestring("skillspark"));

//

// for(let i=10;i>=1;i--);{
//     console.log(i);
//}
// function that finds the maximum value in an array of numbers
// const array=[1,2,3,4,5]
function findMaximum(numbers) {// yo chatgpt bata gareko
    if (numbers.length === 0) {
        return null;
    }

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
let numbers = [1, 2, 3, 4, 5];
let maximum = findMaximum(numbers);
console.log(`The maximum value is: ${maximum}`);
//function that finds the maximum value in an array of numbers
//function that generates a random number between a given minimum and maximum
// function getRandomNumber(min, max) {
//  function to check palindrome
function ispalindrome(str){
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return reversed===str;
}
const result2=ispalindrome("madam");
console.log(result2)
//16.calculates the area of circle
let pi=22/7;
function circle(r){
  return (2*pi*r)
}
const r=4;
console.log(circle(r));
// 18.program for containing digit in string
function containsOnlyDigits(str) {
    // Regular expression to check if the string contains only digits
    const regex = /^\d+$/;
    return regex.test(str);
 }
 
 // Test the function with different strings
 console.log(containsOnlyDigits("123456")); // true
 console.log(containsOnlyDigits("1234abc")); // false
 console.log(containsOnlyDigits("9876543210")); // true
 console.log(containsOnlyDigits(" ")); // false
 console.log(containsOnlyDigits("123 456")); // false
 console.log(containsOnlyDigits("")); // false
 

