var button=document.querySelector('button');
var fn2=()=>console.log(this);
function fn(){
    console.log(this);
}
button.addEventListener('click',fn2);