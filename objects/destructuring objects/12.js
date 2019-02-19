let obj={
    name:'Max',
    age:20
}
let {name,age}=obj
console.log(name,age)
//Max 20

let obj1={
    name1:'Max',
    age1:20,
    greet:function(){
        console.log('Hello')
    }
}
let {name1,greet}=obj1
greet()
//Hello

let object={
    x:7,
    y:8,
    z:9
}
let x=object.x,
y=object.y;
z=object.z;
console.log(x,y,z)
//7 8 9

let object1={
    a:7,
    b:8,
    c:9
}
let {a,b,c}=object1
console.log(a,b,c)
//7 8 9

let object2={
    a1:7,
    b1:8,
    c1:9
}
let {a1,b1,c1}=object2
console.log(a1,b1,c1)
//7 8 9