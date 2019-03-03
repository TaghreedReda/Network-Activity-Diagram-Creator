//p for position .. v for value 
// name and duration
var nameP , durationV ,nameV,durationP;
//appendices
var appendicesV,appendicesP;
//main array
var activites=[]; 
//buttons
var newbutton,finishbutton;
var startx=20,starty=230;
var start;
var currentActivity;

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
	
	//start
	start=new Activity('Start','0','0');
	activites.push(start);
										 

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

 this.height=40;
 this.width=120;
 this.x= startx+150;
 this.y= starty;

 this.next=[];
 this.previous=[];
 
 for (var i=0 ;i<appendicesNames.length;i++){
      if (appendicesNames[i]!=',')
           this.previous.push(appendicesNames[i]);
 }

}

function mousePressed() {	
		currentActivity=-1;
		for (var i=activites.length-1 ;i>=0;i--){
			if(mouseX > activites[i].x  && mouseX <activites[i].x + activites[i].width && 
      mouseY > activites[i].y  && mouseY < activites[i].y + activites[i].height){
			     currentActivity=i;
				 break;
  } 
  }
		
	}
	
function mouseDragged() {	
    activites[currentActivity].x = mouseX- 60; 
   activites[currentActivity].y = mouseY- 20;
	
	}

function draw()
{
 background(255); 

		
for (var k=1 ;k<activites.length;k++){
	if(activites[k].previous.length==0){
		 fill(125,220,31);
  line(activites[k].x + activites[k].width /2,activites[k].y + activites[k].height/2,activites[0].x + activites[0].width/2,activites[0].y + activites[0].height /2);
	}
	if (activites[k].previous.length!=0) {
		for (var l=0;l<activites[k].previous.length;l++){
			   for (var z=1 ;z<activites.length;z++){
					 if (activites[k].previous[l]==activites[z].name[0]){
						  fill(125,220,31);
  line(activites[k].x + activites[k].width /2,activites[k].y + activites[k].height/2,activites[z].x + activites[z].width/2,activites[z].y + activites[z].height /2);
	
					 }
				 }
			
		}
	}
}	
for (var j=0 ; j<activites.length;j++)
{
	if(j==0){	
	//drawing the start
 fill (100,100,100);
	activites[j].x =startx;	
 rect(activites[j].x, activites[j].y, activites[j].width, activites[j].height);
 fill(255);
 textSize(14);
 text("START",activites[j].x+40 ,activites[j].y+15,20,20);
	}
	else 
	{
    fill(200,100,150);
    rect(activites[j].x, activites[j].y, activites[j].width, activites[j].height);
  
    fill(255);
    textSize(20);

	  text(activites[j].name,activites[j].x+20 ,activites[j].y+15,20,20);
    text(activites[j].duration,activites[j].x+80 ,activites[j].y+15,20,20);
}
}


}