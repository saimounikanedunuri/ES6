let personOne={};
let personTwo={};
let people=new WeakMap();
people.set(personOne,"David");
people.set(personTwo,"Abc");
console.log(people.get(personOne)); //David
console.log(people.get(personTwo)); //Abc