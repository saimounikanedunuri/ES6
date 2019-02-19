function createUser(fname,lname){
    let fullName=fname+' '+lname;
    return{
        fname:fname,
        lname:lname,fullName,
    }
}
let user=createUser('Abc','def');
console.log(user.fname,user.lname,user.fullName)
//Abc def Abc def

function createUser(fname,lname){
    let fullName=fname+' '+lname;
    return{
        fname,
        lname,
        fullName,
    }
}
let user1=createUser('Abc','def');
console.log(user1.fname,user1.lname,user1.fullName)
//Abc def Abc def