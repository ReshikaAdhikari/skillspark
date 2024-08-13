//camelcase
const fullName = "Reshika Adhikari";
//pascalcase
const FullName ="Reshika Adhikari";
//snakecase
const full_name="Reshika Adhikari";



//Data type
//1.string
 


//2.Number
const age ="25"
console.log(age);

//3.Boolean
const ismarried = "false"
console.log(ismarried);

//Null
const isnull ="True"
console.log(isnull);

//object
const person={
    name:"Reshika",
    age:23,
    ismarried:true 
}
console.log(person);
console.log(person.name);


//array
const numbers=[1,2,3,4,5];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers.slice(-1));

const student = [
    {
        name:"Reshika",
        age:23,
        ismarried:true 
    },
    {

        name:"Lisan",
        age:24,
        ismarried:false
    }
];
console.log(student)
console.log(student[0].name);


//8.NAN
// let x=10;
// let y="tes";
// let z=x+y;// + bahek aru ma NAN aaucha
// console.log(z);

// //type of operation
// console.log(typeof x);

// // type casting
//  let x_string= String(x);
// console.log(x_string);

// // converting string in to number
// let p ="10"
// let p_number = Number(p);
// let p_parseint= parseint(p);

// number to string
// let num =10;
// let num_string=num.toString();
// console.groupCollapsed(num_string);

//operator
//arithmetic
let a ="10";
let b = 20
let c = a+b;
console.log(c);
//exponential 
let h = a**2;
console.log(h);
//modulus
let g=a%b;
console.log(g);

// assignment operator
// let x =10;
// let y = 20;
// //x++;//x+=1 //x=x+1
// //x++
// //x-- 
// x+=5;
// //x--;//
// y+=10; // sabai operation yesari nai huncha
// console.log(y);

//comparision operators
let m = 10;
let n = 20;
console.log(m==n);
console.log(m!=n);
console.log(m>n);
console.log(m<n);
console.log(m>=n);
console.log(m<=n);

let x = "10"
let y = 10
console.log(x==y);
console.log(x!==y);
console.log(x===y);



//logical operator
let p = true;
let q = false;
console.log(p&&q);//&& use garnai parcha
console.log(p||q);
console.log(!p);
console.log(!q);

//conditional statement
let age1=20;
if(age1>=20) {
    console.log("You are an audlt.");
}else {
    console.log("you are a young.");
}


//switch case



