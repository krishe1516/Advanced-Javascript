//B.call back Function



function addition(a,b){
    console.log("Addition=" +a+b);
}

function sub(a,b){
    console.log("Substraction=" +a-b)
}

function remainder(a,b){
    console.log("Remainder" +a%b);
}

function calculator(a,b,fun)
{
    fun(a,b)
}

function divide(p,r){
    console.log("Divide" +p/r);
}

calculator(13,12,divide)
 