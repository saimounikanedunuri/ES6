function box(height,color,url){
    var height=height || 50,
    color=color || 'green',
    url=url || 'google.com';
    console.log('height',height,'color',color,'url',url)
}
box(0); //height 50 color green url google.com
box(30); //height 30 color green url google.com

function box1(height1,color1,url1){
    var height1=(height1 !==undefined) ? height1:50,
    color1=color1 || 'green',
    url1=url1 || 'google.com';
    console.log('height1',height1,'color1',color1,'url1',url1)
}
box(0); //height 50 color green url google.com
box(30); //height 30 color green url google.com

function box2(height2=40,color2='blue',url2='indiabix.com'){
    console.log('height2',height2,'color2',color2,'url2',url2)
}
box(0); //height 50 color green url google.com

function box2(height2=40,color2='blue',url2='indiabix.com'){
    console.log('height2',height2,'color2',color2,'url2',url2)
}
box(60,'white','abc'); //height 60 color white url abc

function isEqualTo(num,compare){
    return num==compare;
}
console.log(isEqualTo(10,10)); //true

function isEqualTo(num,compare=0){
    return num==compare;
}
console.log(isEqualTo(10)); //false

function isEqualTo(num,compare=10){
    return num==compare;
}
console.log(isEqualTo(10)); //true

function isEqualTo(num=10,compare=10){
    return num==compare;
}
console.log(isEqualTo()); //true

function isEqualTo(num=10,compare){
    return num==compare;
}
console.log(isEqualTo(10)); //false

function isEqualTo(num=10,compare){
    console.log(num) //11
    console.log(compare) //undefined
    return num==compare;
}
console.log(isEqualTo(11)); //false

function isEqualTo(num,compare=10){
    console.log(num) //11
    console.log(compare) //10
    return num==compare;
}
console.log(isEqualTo(11)); //false

function isEqualTo(num,compare=10/2){
    console.log(num) //11
    console.log(compare) //5
    return num==compare;
}
console.log(isEqualTo(11));  //false

function isEqualTo(num,compare=num){
    console.log(num) //11
    console.log(compare) //11
    return num==compare;
}
console.log(isEqualTo(11));  //true

function isEqualTo(num,compare=num){
    console.log(num) //11
    console.log(compare) //20
    return num==compare;
}
console.log(isEqualTo(11,20));  //false

var a=100;
function isEqualTo(num,compare=a){
    console.log(num) //11
    console.log(compare) //100
}
console.log(isEqualTo(11));  //false

function isEqualTo(num=10,compare=num){
    console.log(num) //10
    console.log(compare) //10
    return num==compare;
}
console.log(isEqualTo());  //true