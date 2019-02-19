function fn(){
    console.log('Hello!')
};
fn();
//Hello!

var fn=()=>{
    console.log('Hello!');
}
fn();
//Hello!

var fn=()=>console.log('Hello!')
fn();
//Hello!

var fn=()=>'Hello!'
console.log(fn())
//Hello!

var fn=()=>'Hello!';
function fn(){
    return 'Hello!';
};
console.log(fn());
//Hello!

var fn=()=>{
    let a=2
    let b=3
    return a+b
};
console.log(fn())
//5

var fn=(a,b)=>{
    return a+b
};
console.log(fn(3,8))
//11

var fn=(a,b)=>a+b
console.log(fn(2,5))
//7

var fn=(a)=>a+5;
console.log(fn(3))
//8

setTimeout(()=>console.log('Hello'),1000)
//Hello 

let foo=(a,b)=>{
    let counter=0;
    for(let i=0;i<b;i++){
        counter+=a;
    }
    return counter;
};
console.log(foo(1,5))
//5