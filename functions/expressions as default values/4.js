function box(height=50,color='blue',url='google.com'){
    console.log('height is:',height,'color is:',color,'url is:',url);
}
box();
//height is: 50 color is: blue url is: google.com

function setHeight(value){
    return value*10;
}
function box(height=setHeight(10),color='blue',url='google.com'){
    console.log('height is:',height,'color is:',color,'url is:',url);
}
box(); //height is: 100 color is: blue url is: google.com

function mul(num=2,numTwo=num){
    return num*numTwo;
}
console.log(mul(3)) //9
console.log(mul(3,9)) //27