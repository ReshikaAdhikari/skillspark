//spread operator

// const arr = [1,2,3,4,5]
// const newarr = [5,6,...arr];
// console.log(newarr);

//rest operator
const arr =[1,2,3,4,5]
const[a,b,c,...rest]=arr;
console.log(a,b,c);
console.log(rest);

//reduce method
function add(...numbers){
    return numbers.reduce((sum,num)=> sum + num);
}
console.log(add(1,2,3,5,8));