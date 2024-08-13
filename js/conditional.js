//conditional statement
let age1=20;
if(age1>=20) {
    console.log("You are an audlt.");
}else {
    console.log("you are a young.");
}

let age2=20;
if(age2>=18) {
    console.log("you are elligible to vote");
}else{
    console.log("you are not elligible to vote");
}
//divisible by 5
let number=20;
if (number%5==0) {
    console.log("divisible");
    } else {
        console.log("not divisible");
    }

    let num = 5;
    if(num>=0){
        console.log("number is positive");
    }else{
        console.log("number is negative");
    }

    // write a program to check whether a number is positive or negative or zer
    // let number = 0;
    // if(number>0){
    //     console.log("number is positive");
    // }
    // else if(number<0){
    //     console.log("number is negative");
    // }
    // else{
    //     console.log("number is zero");

        // write a program to check the grades of the student based on marks
        let marks = 89
        if(marks<=40 && marks>=50){
            console.log("third division");
        }
        else if(marks>=50 && marks<60){
            console.log("second division");
        }
        else if(marks>=60 && marks<80){
            console.log("first division");
        }
        else if (marks>80 && marks<=100)
            {
            console.log("distinction");
        }
        else
        {
            console.log("fail")
        }


//       // divisible by 

// //switch
let day = 3;
switch (day) {
    case 1 :
        console.log("its a sunday");
   case 2 :
    console.log("its a monday");
    case 3:
    console.log("its a tuesday");
    case 4 :
        console.log("its a wednesday");
        break;
        case 5:
            console.log("its a thrusday");
            case 6:
                console.log("its a friday");
                case 7:
                    console.log("its a saturday");
                    default:
                        console.log("invalid day");}
//leap year
let year= 2001
if(year % 4 === 0 && year % 100 !== 0){
    console.log("This is a leap year");
}else{
    console.log("This is not a leapyear");
}
//vote elligible
let age=20;
if(age>=18){
    console.log("i am elligile to vote");
}else{
    console.log("i am not elligible to vote");
}
//more than 10 charcter checking ifelse statement
let name = "I am Reshika Adhikari, i am 22";
if (name>10) {
    console.log("greater than 10");
} else {
    console.log("smaller than 10");
    }
    //grading
    let marks1=80;
if(marks1>=90){
    console.log("Grade A");
}
else if(marks1>=80 && marks1<90){
    console.log("Grade B");
}
else if(marks1>=70 && marks1<80){
    console.log("Grade C");
}
else if(marks1>=60 && marks1<70){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}

//a JavaScript program that determines if a given variable is an array or not, using if/else statement
let data = [1, 2, 3];
if (Array.isArray(data)) {
  console.log("The variable is an array.");
} else {
  console.log("The variable is not an array.");
}
// javascript function discount amount based on purchase amount
function calculateDiscount(purchaseAmount) {
    switch (true) {
      case (purchaseAmount < 100):
        return purchaseAmount * 0.05;
      default:
        return purchaseAmount * 0.1;
    }
  }
  console.log(calculateDiscount(120)); 


  //Type of variable
  function getType(variable) {
    if (typeof variable === 'string') {
      return "string";
    } else if (typeof variable === 'number') {
      return "number";
    } else if (typeof variable === 'boolean') {
      return "boolean";
    } else if (typeof variable === 'object') {
      if (variable === null) {
        return "null";
      } else {
        return "object";
      }
    } else if (typeof variable === 'undefined') {
      return "undefined";
    } else {
      return "unknown";
    }
  }
  console.log(getType("Hello")); 
  
  
