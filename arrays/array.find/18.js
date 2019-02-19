let services=[
    {name:'nals',activated:false},
    {name:'nals1',activated:true},
    {name:'nals2',activated:true}
];
let activated=services.find(service=>service.activated)
console.log(activated)
//{ name: 'nals1', activated: true }