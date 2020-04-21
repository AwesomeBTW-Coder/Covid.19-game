class Virus{
    constructor(x,y){
        this.x = x
        this.y = y
        this.hieght = 50
        this.width = 50

    }


 display(){
     rectMode(CENTER)
     rect(this.x,this.y,this.width,this.hieght);



 }

 move(){
     this.y = this.y+5
 }

}