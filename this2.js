 class Mobile{

    constructor(brand,battery,camera,ram,color,price)
    {
        this.brand=brand,
        this.battery=battery,
        this.camera=camera,
        this.ram=ram,
        this.color=color,
        this.price=price

    }
    show()
    {
console.log(this.brand,this.battery,this.camera,this.ram,this.color,this.price)
    }
 }

 let m1=new Mobile("one Plus 10R 5G ,","120Hz ,","50MP,","12GB ," ,"Forest Green ,","38,500")
 let m2=new Mobile("Redmi Note 11 Pro ,","108Hz ,","50MP,","6GB ," ,"Mirage blue,","19,900")
 let m3=new Mobile("IQOO Neo 6 5G,","120Hz ,","64MP,","12GB ," ,"Dark Nova ,","29,999")

 m1.show();
 m2.show();
 m3.show()