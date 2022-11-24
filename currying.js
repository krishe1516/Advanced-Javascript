
function details(obj){

    return function(keyinfo){
        return obj[keyinfo]
    }

}

let info={
    name:"Sheetal",
    age: 20,

}
temp=details(info)("name")
console.log(temp);