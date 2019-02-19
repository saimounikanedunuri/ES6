let obj={
    name:'Max',
    age:27
};
console.log(obj)
//{ name: 'Max', age: 27 }

let name='Anna';
let age=21;
let obj1={
    name,
    age
};
console.log(obj1)
//{ name: 'Anna', age: 21 }

let name1='Anna';
let age1=20;
let obj2={
    name1:'Max',
    age1,
    greet(){
        console.log(this.name1+','+this.age1)
    }
};
obj2.greet();
//Max,20

let name2='Anna';
let age2=21;
let obj3={
    name2:'Max',
    age2,
    "greet"(){
        console.log(this.name2+','+this.age2)
    }
};
obj3["greet"]();
//Max,21