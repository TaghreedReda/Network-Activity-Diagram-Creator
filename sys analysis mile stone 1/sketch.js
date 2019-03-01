//p for position .. v for value 
var nameP , durationV ,nameV,durationP;// name and duration
var newbutton,finishbutton;
var appendicesV,appendicesP; //appendices
var activites=[]; 

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

  newbutton=createButton('New');
  newbutton.position(30+80,185);
  newbutton.mousePressed(createActivity);

  finishbutton=createButton('Finish');
  finishbutton.position(90+80,185);

}

function createActivity()
{
    var activity=new Activity(nameV.value(),durationV.value(),appendicesV.value());
    activites.push(activity);

}

function Activity (activityName,activityDur,appendicesNames)
{
 this.name=activityName;
 this.duration=activityDur;
 
 this.es; //early start
 this.ef; //early finish
 this.ls; //last start
 this.lf; //last finish
 this.critical=false; //0 or 1 
 this.v1;
 this.v2;

 this.appendices=[];
 
 for (var i=0 ;i<appendicesNames.length;i++){
      if (appendicesNames[i]!=',')
           this.appendices.push(appendicesNames[i]);

 }
}

//start vertices
var startx=20,starty=180;
//custom vertices
var custX=startx+150 , custY=starty;

function draw()
{
 background(255); 

 fill (100,100,100);
 rect(startx,starty,120,40);

 fill(255);
 textSize(14);
 text("START",startx+40 ,starty+15,20,20);

for (var j=0 ; j<activites.length;j++){
    fill(200,100,150);
    rect(custX, custY, 120, 40);
  
    fill(255);
    textSize(20);
    text(activites[j].name,custX+20 ,custY+15,20,20);
    text(activites[j].duration,custX+80 ,custY+15,20,20);
  
}
}
