var person={
    fname:'Abc',
    lname:'def',
    getFullName:function(){
        console.log(this.fname+' '+this.lname);
    }
}
person.getFullName();
//Abc def

var person={
    fname:'Abc',
    lname:'def',
    getFullName:function(){
        var name=function(){
            console.log(this.fname+' '+this.lname);
        }
        return name();
    }
}
person.getFullName();
//undefined undefined

var person={
    fname:'Abc',
    lname:'def',
    getFullName:function(){
        var self=this;
        var name=function(){
            console.log(self.fname+' '+self.lname);
        }
        return name();
    }
}
person.getFullName();
//Abc def

var person={
    fname:'Abc',
    lname:'def',
    getFullName:function(){
        var name=function(){
            console.log(this.fname+' '+this.lname);
        }.bind(this)
        return name();
    }
}
person.getFullName();
//Abc def

var person={
    fname:'Abc',
    lname:'def',
    getFullName:function(){
        var name=()=>console.log(this.fname+' '+this.lname);
        return name();
    }
}
person.getFullName();
//Abc def