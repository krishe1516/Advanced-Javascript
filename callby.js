//call by value

function fun(value)
{
    console.log(value);
}
let a=(34);

fun(a); //

//call by reference

function fun(reference)
{
    console.log(reference);
}

let r={
    name:'Sheetal Shinde',
    Village:'Nashik'
}

fun(r);