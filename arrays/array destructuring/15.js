let no=[1,2,3]
let [a,b]=no
console.log(a) //1
console.log(b) //2
console.log(no) //[1,2,3]

let [c,d,e,f]=no
console.log(f) //undefined

let [g,...h]=no
console.log(h) //[2,3]

let num=[1,2,"3"]
let [i,...j]=num
console.log(j) //[2,'3']

let x=[1,2,"3"]
let [k,l,m,n]=x
console.log(n) //undefined

let y=[1,2,"3"]
let [o,p,q,r='default']=y
console.log(r) //default

let z=[1,2,"3"]
let [s='default',t,u,v='default']=z
console.log(s) //1

let [a1,b1]=[1,2,3]
console.log(a,b) //1 2
