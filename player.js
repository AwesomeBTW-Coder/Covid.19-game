class Sanitizer{
  constructor(x,y){
   this.x=x
   this.y =y
   this.width = 50
   this.hieght = 50
  }
  display(){
      rectMode(CENTER);
      rect(this.x,this.y,this.width,this.hieght);
      this.x = mouseX
  }
 
}