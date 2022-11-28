
class Car{


    constructor(color,No_of_gears,Engine,No_of_Airbags)
    {
      this.color=color,
      this.noofgears=No_of_gears,
      this.engine=Engine,
      this.noofairbags=No_of_Airbags

    }
    show()
    {
        console.log(
            this.color,
            this.noofgears,
            this.engine,
            this.noofairbags)
    }



}
let c1=new Car('Red ,','1 ,','1 huge_cylinder ,','6 ')
c1.show();