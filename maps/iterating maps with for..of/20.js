let cars=new Map()
cars.set("carOne","Audi")
cars.set("carTwo","Ford")
cars.set("carThree","GM")
cars.set("carFour","BMW")
for(let[key,value] of cars){
    console.log(`${key}=${value}`)
}
/* carOne=Audi
carTwo=Ford
carThree=GM
carFour=BMW */