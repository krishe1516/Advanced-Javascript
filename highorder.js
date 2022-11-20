//Higher Order Function

function returnValue()
{
    console.log("addition of a and b")
    return function(){console.log("It is an Higher Order Function")}
}

let p=returnValue()();
//returnValue();