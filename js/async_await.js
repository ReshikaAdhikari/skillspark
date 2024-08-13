//async and await functiom
//async function is used to define asynchronnous function that return a promise
const fetchdata = ()=> {
    //  newPreturnromise((resolve,reject)) => {
     return setTimeout(() => {
        console.log("Data Fetched");
    },2000);
    };
     
     async function returnFetchData() {
        console.log("Fetching data. . .");
        await fetchdata();
    }
    returnFetchData();
