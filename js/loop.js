//forloop
// let i;
// for( i=1; i<=10; i++){
// console.log(i);
// }
//while loop
// let j =1;
// while(j<=10){
//     console.log(j);
//     j++
// }
//do while
// let j = 1; 
// do{
//     console.log(j);
//     j++;
// }
// while (j<=10);
//even no using for loop
// for (let i=0; i<=10; i++)
//     {  
//         if(i%2==0)
//         {
//             console.log(i);
//         }
//         }
//     //
//     let sum =0;
//     for (let j = 1; j <= 10; j++)
        // sum= sum+j;
    // for step by step use console.log(sum)
    // {
    //     console.log(sum);//gives final values
    // }
    //find factorial of given no
    // let fact=1;
    // for(i=1;i<=5;i++){
    //     fact=fact*i;
    // }
    // {
    //     console.log(fact);
    // }
    //the square of numbers from 1 to 5
    // for (let i = 1; i <= 5; i++) {
    //     console.log(i * i);
    //   }
      //cube of a number
// for (let num =1;num<=5;num++) {
//   console.log(num * num * num);
// }
//print the numbers from 1 to 100, but skip the multiples of 5
// for( let num=1; num<=100; num++){
//     if(num%5!==0){
//         console.log(num)
//     }
// }
//find the sum of all elements in multidimensional array 
// star matrix
for( let i=1;i<=5;i++){
let star=""
for( let j=1;j<=i;j++)
{
    star +=" * "//space nadiye o/p ma ni space aaunna
}
console.log(star)
}
// print the patern:
//1
//12
// 123
//1234
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
  // Reverse a given string 
//   const str = "hello";
// let reversedStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversedStr += str[i];
// }
// console.log("Reversed string:", reversedStr);






  // solid 
//   let rows=5;
// let pattern="";
// for(let n=1;n<=5;n++){
//     for(let num=1;num<=5;num++){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// console.log(pattern);
//reverse star
for(let i=5;i<=row;i++){
    for(let j=1; j<=6-i;j--){
       pattern+="*"; 
    }
    pattern+="\n";
}
console.log(pattern);
