function sum()
{
    var num=Array.prototype.slice.call(arguments);
    var res=0;
    num.forEach(function(num)
    {
        res+=num;
    });
    return res;
}
console.log(sum(3,5,7,9)) //24

let num=[1,2,3,4,5];
function sumUp(toAdd){
    let res=0;
    for(let i=0;i<toAdd.length;i++){
        res+=toAdd[i];
    }
    return res;
}
console.log(sumUp(num)) //15

function sumUp(...toAdd){
    let res=0;
    for(let i=0;i<toAdd.length;i++){
        res+=toAdd[i];
    }
    return res;
}
console.log(sumUp(100,10,20)) //130

function sumUp(toAdd){
    console.log(toAdd) //[100,10,20]
    let res=0;
    for(let i=0;i<toAdd.length;i++){
        res+=toAdd[i];
    }
    return res;
}
console.log(sumUp(100,10,20)) //130
console.log(sumUp(100,10,"20")) //11020
