let cars=['Audi','Ford','Audi','Mercedes','VW']
console.log(cars.length); //5

let cars1=new Set();
cars1.add('Audi');
cars1.add('Ford');
cars1.add('Mercedes');
cars1.add('Audi');
console.log('total no of cars',cars1.size)
// total no of cars 3