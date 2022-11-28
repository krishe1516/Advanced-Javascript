//

class laptop
{

    constructor(brand,screensize,color,CPU,ram)
    {
      this.brand=brand,
      this.screensize=screensize,
      this.color=color,
      this.CPU=CPU,
      this.ram=ram
    }
    show()
    {
        console.log(this.brand,this.screensize,this.color,this.CPU,this.ram)

    }
}

let L1=new laptop("Hp ,", "14 inches ," ,"Natural Silver ," ,"core i3 ," ,"8GB ")
let L2=new laptop("Lenovo ,", "15.6 inches ," ,"Cloud Grey ," ,"Ryzen 3 ," ,"8GB ")
let L3=new laptop("Acer ,", "15.6 inches ," ,"Carbon black ," ,"3.3 GHz ," ,"8GB")
L1.show()
L2.show()
L3.show()