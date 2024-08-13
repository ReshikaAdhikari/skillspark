class student{
    constructor(name,age,address,phone){
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    getdetails(){
        return `Name:${this.name},Age:${this.age},Address:${this.addess},phone:${this.phone}`;
    }
}
let student1= new student("Reshika",22,"bardiya",9876543216);
let student2= new student("Elina",23,"kohalpur",987456321);
let student3 =new student("shiwani",24,"npj",984526718);
console.log(student1,student2,student3.name);
console.log(student3.getdetails());


