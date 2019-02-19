let name='Max'
let a=`
like this
`;
console.log(a)
//like this

let name1='Max'
let a1=`
Hello, I'm ${name1}
`
console.log(a1)
//Hello, I'm Max

let a2=`
Hello, I'm \${name1 +'!!!'}
`
console.log(a2)
//Hello, I'm ${name1 +'!!!'}

let a3=`
Hello, I'm ${name1 +'!!!'}
`
console.log(a3)
//Hello, I'm Max!!!

let serviceId=123
let url='/service/'+serviceId;
console.log(url)
//service/123

let serviceId1=123
let url1=`/service/${serviceId1}`;
console.log(url1)
//service/123

console.log("string text line1 \n"+"string text line2")
/* string text line1
string text line2 */

console.log(`string1\nstring2`)
/* string1
string2 */