

var player;
var enemy;
var enemies=[]




function setup() {

  createCanvas(1200,800);
  
 player = new Sanitizer(40,450);
 
 







}

function draw() {
  background(0);  
  for (var i =0;i<enemies.length;i++){
    enemies[i].display();
    enemies[i].move();
  }





  player.display();
  
}

function keyPressed(){
  if (keyCode===32){
    var enemy = new Virus(600,-10)
    enemies.push(enemy)
  }
}