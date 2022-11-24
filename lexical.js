//lexical scope

let a=1;
function num(){
    let b=9;

    function fun1(){
        let c=8;

        function fun2(){
          let d=5;

        }
        fun()


    }
    fun1()


}
num()