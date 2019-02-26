var backk, x=-400,y=400;

function preload(){

 backk=loadAnimation("1.png","2.png");
}

function setup() {
  createCanvas(800,800);
 
}

function draw() {
 background(0);

  if(x<700){
    animation(backk,x,y);
     x+=3;
  }
  
 

}
