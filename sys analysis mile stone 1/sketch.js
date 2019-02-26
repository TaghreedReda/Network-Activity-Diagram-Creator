

var nameP , durationV ,nameV,durationP,appendicesV,appendicesP;

function setup() 
{
  createCanvas(800,800);
  //1-name
  nameP=createElement('h3', 'Activity Name : ');
  nameP.position(10,45);
  nameV=createInput();
  nameV.position(188,65);

  //2-duration
  durationP=createElement('h3', 'Activity Duration : ');
  durationP.position(10,85);
  durationV=createInput();
  durationV.position(188,105);

  //3-appendices
  appendicesP=createElement('h3', 'Activity Appendices : ');
  appendicesP.position(10,125);
  appendicesV=createInput();
  appendicesV.position(188,145);


}



function node (number)
{
 this.name;
 this.appendicesNum=number;
 this.es; //early start
 this.ef; //early finish
 this.ls; //last start
 this.lf; //last finish
 this.critical=false; //0 or 1 
 this.v1=this.ls-this.es;
 this.v2=this.lf-this.ef;

 if (this.v1==this.v2==0)
 {
   this.critical=true;
 }
 this.appendices=[number];


}

function draw()
{
 background(255); 

}
