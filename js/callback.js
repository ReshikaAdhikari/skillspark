// const greet=(callback)=>{
//     return callback;
// }
// function callback (){
// return "Hello reshu";
// }
// console.log(greet(callback()));
 //another method
// const greet=(callback)=>{
//     return callback
// }
// const callbackfunction = (name)=>{
//     return `Hello ${name},how are u`;// ` yo sign ko namw backtab ho
// }
// console.log(greet(callbackfunction("reshu")));

//
// const add=(a,b)=>{
//     return a+b
// }
// const sub=(a,b)=>{
//     return a-b
// }
// const addsub =(a,b)=>{
//     let sum=add(a,b);
//     let substract=sub(a,b);
//     return `addition is ${sum} and subtraction is ${substract}`;
// }
// let result1 = addsub(4,5);
// console.log(result1);


//2.
const processdata=(arr,callback)=>{
    // let array=[1,2,3,4];
    for(i in arr){
        callback(arr[i]);
    }
}
function callbackfunction(data){
    console.log(data)
}
// let arr=[1,2,3,4,6,7,8,9];
processdata([1,2,3,4,5,6,7],callbackfunction);



//3.
function performtask(number,callback){
    settimeout(()=>{
      const  result=number*2;
        callback(result);
    },1000);
}
const Callback = result => {
    console.log(result);
};

performTask(5,Callback); 
