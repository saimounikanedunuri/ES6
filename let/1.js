console.log('Something!')

let name='sai';
console.log(name)

let age=21;
if(true)
{
    let age=22;
    console.log(age) //22
}
console.log(age) //21

// let in for loops
var fun=[];
for(let i=0;i<5;i++)
{
    fun.push(function()
    {
        console.log(i) //0 1 4
    });
}
fun[0]();
fun[1]();
fun[4]();

var fun=[];
for(var i=0;i<5;i++)
{
    fun.push(function()
    {
        console.log(i) //5 5 5
    });
}
fun[0]();
fun[1]();
fun[4]();

console.log(foo)
var foo='hello';
// output: undefined

let a='hello';
console.log(a) //hello
{
let a='world';
console.log(a) //world
}

function doSmth(){
    age1=20;
}
let age1;
doSmth();
console.log(age1); //20