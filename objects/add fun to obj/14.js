let myObj={
    prop1:'Hello',
    prop2:'world',
    fullName:function(fname,lname){
        let fullName=fname+' '+lname;
        return fullName;
    }
}
console.log(myObj.fullName('Abc','def'))
//Abc def