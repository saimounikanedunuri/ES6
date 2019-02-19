let cars=new Set()
cars.add('Audi')
cars.add('Ford')
cars.add('Mercedes')
cars.add('Audi')
for(let car of cars){
    console.log(car)
}
/* Audi
Ford
Mercedes */

let cars1=new Set()
cars1.add('Audi')
cars1.add('Ford')
cars1.add('Mercedes')
cars1.add('Audi')
let [a,b,c]=cars1;
console.log(a,b,c)
// Audi Ford Mercedes