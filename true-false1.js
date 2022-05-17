// Falsy
// false
// 0
// ""
// udefined
// null
// NaN

// Truthy
//'0', ' ' []
let name = 12;
console.log(name);
if(name || name == 0){
    console.log("This is true!");
}
else{
    console.log("Ops condition not mathc.");
}