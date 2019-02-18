let no=[1,2,3,4,5];
console.log(Math.max(no)) //NaN
console.log(Math.max(...no)) //5
console.log(...no) //1 2 3 4 5

//for - of loop
let test=[1.23,1.10,4.1];
for(let a of test)
{
    console.log(a)
}
/*1.23
1.1
4.1 */

let no1=[1,2,3];
function sum(n1,n2,n3)
{
    return n1+n2+n3;
}
console.log(sum(...no1)) //6
console.log(sum.apply(null,no1)) //6

//concatinating
let a=[2,3,4];
let b=[1,...a,5];
console.log(b); //[ 1, 2, 3, 4, 5 ]