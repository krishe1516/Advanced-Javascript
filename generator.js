
function* fun()
{
    yield "car",
    yield "Bike",
    yield "mobile",
    yield "Home"
}
let a=fun()

for(y of a){
console.log(y);
}