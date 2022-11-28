//iteration in object

let object=
{
    [Symbol.iterator]:function()
    {
        count=0;
        let iterator={
            next:function fun()
            {
                count ++

                if(count==1){
                    return {value:"Sheetal" ,done:false}
                }
                else if(count==2){
                    return {value:"Pooja",done:false}
                }
                else if(count==3){
                    return{value:"Sneha",done:false}
                }
                else{
                    return{value:"none" ,done:true}
                }
            }
        }
        return iterator;
    }
}
for(y of object){
    console.log(y)
}