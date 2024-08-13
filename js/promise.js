// promise
const votepromise = new Promise((resolve,reject)=>{
    let age=20;
    if(age>=18){
        resolve("you are elligible for voting");//resolve
    } else {
        reject("you arenot elligible for voting");//reject
    }
} );
votepromise
.then(
    (data)=>{
        console.log(data);
    })
    .catch(
    (data)=>{
        console.log(data);
    }
);

//
const helloWorldPromise  = new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello, world!");
        }, 2000); // 2 seconds delay
    });

helloWorldPromise
.then(
    (data)=>{
        console.log(data);
    }
);

//2. handling promise resolution
// const promise = new Promise((resolve) => {
//     resolve(10);
// });

// promise
// .then(value => {
//     console.log(value); // Logs 10 to the console
// });