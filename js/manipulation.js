// let fruits =["apple","banana"];
// fruits.push("orange")
// console.log(fruits);

//pop
// 

// unshift
// let fruit =["apple","banana"];
// fruit.unshift=["grapes","orange"];
// console.log(fruit);


//slicing
let number =['1','2','3','4','5'];
let slicedNumber = number.slice(1,3);
console.log(slicedNumber);

let animal =['lion','elephant','deer','cat'];
let slicedAnimal = animal.slice(0,3);
console.log(slicedAnimal);

let no = [1,2,3,4,5,6];
let slicedNo = no.slice(-3,-1);
console.log(slicedNo);

//splice Method
let fruits = ['apple','banana','cherry'];
fruits.splice(2,0,'grape','kiwi');// 0 means how many counts u want to delete
console.log(fruits);

// (remove)
// let color =['Red','green','blue','purple'];
// let removedColor = color.splice(2,2);
// console.log(color);

//split
let sentence = "hello,this is a res";
let words = sentence.split(' ');
console.log(words);


//find ,filter,map
//find
// const numbers= [1,2,3,4,5,6,7,8,9,10];
//   const data = numbers.find((num)=> num>5);
// console.log(data);

//filter
// const numbers= [1,2,3,4,5,6,7,8,9,10];
//   const data = numbers.filter((num)=> num>5);
// console.log(data);

//map
// const numbers= [1,2,3,4,5,6,7,8,9,10];
//   const data = numbers.map((num)=> num/2);
// console.log(data);

// const numbers1= [1,2,3,4,5,6,7,8,9,10];
//   const data1 = numbers.map((num)=> num*2);
// console.log(data1);



//find a person who have first age above than 30
const person = [
  { name: 'Reshu', age: 25 },
  { name: 'Res', age: 35 },
  { name: 'lishu', age: 28 },
  { name: 'shiwani', age: 32 }
];
const firstage = person.find(person => person.age > 30);

console.log(firstage);

//map
// const numbers = [1,2,3,4,5,6,7,8];
// const data = numbers.map((num)=> num**2);
// console.log(data);

//find
// const number1 = [1,2,3,4,5,6,7,8];
// const data = number1.find((num)=> num%2 = 0);
// console.log(data);
 
//
const books = [
  { title: "jindagi", author: "reshu" },
  { title: "Charlie", author: "shiwani" },
  { title: "Mahabharat", author: "Chetan" },
  { title: "bhagwaat geeta", author: "Reshika" }
];
const formated = books.map((books)=> `${books.title} by ${books.author}`);
console.log(formated);

//filter
const student = [
  {name:"Reshika", score:45},
{name:"shiwani", score:50},
{name:"elina", score:65}
];
const failedstudent = student.filter((student)=>student.score<60);
console.log(failedstudent);


// 1.
// let a=[1,2,3,4,5,6,7,8,9,10];
// let even=a.filter((num)=>num%2==0);
// console.log(even);

// // // 2.
// let person=[
//     {name:"x",age:"23"},
//     {name:"y",age:"21"},
//     {name:"z",age:"31"}
//   ];
//   let person1=person.find((older)=> older.age>30);
//   console.log(person1);


// 3.
// let string=["hello i am here for learning javascript","hello i am lisan","hey its me"];
// let string1=string.find((hey)=>{
//   return hey.includes("javascript")
// });
// console.log(string1);

// // // 4.
// let product=[{name:"rice",price:100},
//     {name :"veg",price:150 },
//    {name:"other",price:170}
//   ];
// let myproduct=product.find((item)=> item.price>100);
// console.log(myproduct);
// 5.
// let student=[{name:"A",score:86},
//   {name:"B",score:89},
//   {name:"c",score:92}
// ];
// let firststudent=student.find((first)=>first.score>90);
// console.log(firststudent);


// 1.
// let a=[1,2,3,4,5]
// let square=a.map((num)=>num*num);
// console.log(square);

// // 2.
// let string=["reshika","lisan","sapana","siwani","elina"];
// let string1=string.map((name)=>name.toUpperCase())

// console.log(string1);

// // 3.
// let person=[
//   {firstname:"api",lastname:"Thapa"},
//   {firstname:"kpi",lastname:"Rana"},
//   {firstname:"cpi",lastname:"kathayat"}
// ];
// let fullname=person.map((name)=> ${name.firstname} ${name.lastname});
// console.log(fullname);

// // 5.
// let books=[
//   {title:"xyz",author:"auhtor1"},
//   {title:"abc",author:"author2"},
//   {title:"pqr",author:"author3"}
// ];
// let title2=books.map((book)=> 
//    `${book.title} By ${book.auhtor} `
// );
// console.log(title2);

// 1
// let a=[1,2,3,4,5,6,7,8,9,10];
// let oddnum=a.filter((num)=>{
//   return num%2!==0
// });

// console.log(oddnum);

// // 2.
// let student=[
//   {name:"x",age:"23"},
//   {name:"y",age:"21"},
//   {name:"z",age:"16"}
// ];
// let mystudent=student.filter((myname)=> myname<18);
// console.log(mystudent);

// 4.
// let product=[{name:"rice",price:20},
//       {name :"veg",price:60 },
//      {name:"other",price:47},
//      {name:""}
//     ];
//   let myproduct=product.filter((item)=> item.price>50);
//   console.log(myproduct);
  
// // 3.
//   let string=["reshika","sapana","lisan","elina","shiwane"];
//   let string1=string.filter((str)=>{

//     return !str.includes("e");
//   }
// );
// console.log(string1);

// // 5.
// let name=[
//   {name:"lisan",score:78},
//   {name:"nisan",score:56},
//   {name:"kisan",score:45},
// ];
// let name1=name.filter((myname)=>myname.score<60);
// console.log(name1);

//Given an array of strings,filter out all strings that do not contain the letter "e"
const strarray = ["Hello","World","javascript","programming"];
const filteredarray = strarray.filter((str)=>{
   if (str.includes("e")){
    return;
  }
  return str;
});
console.log(filteredarray);