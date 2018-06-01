var ponits;
var m;
var c;
var lr;
var mycanvas;
var button;
function setup(){
	mycanvas = createCanvas(600,600);
	mycanvas.mousePressed(addPoint);
	m = 1;
	c = 0;
	lr=0.1;
	points = [];
	// button= createButton();
	// button.mouseClicked(click);
}
// function click(){
	// saveCanvas(mycanvas,"mycanvas","jpg");
// }

function draw(){
	background(150);
	drawPoint();
	for(pt of points){
	train(pt);		
	}
	drawLine();
}


function error(pt){
	let error_sum = m * pt.x + c - pt.y;
	return error_sum;
}

function train(pt){
	let dm = 0;
	let dc = 0;
	dm = error(pt) * pt.x;
	dc = error(pt);
	m = m - lr*dm/points.length;
	c = c - lr*dc/points.length;
}


function addPoint(){
	points.push(createVector(mouseX/width,mouseY/height));
}

function drawPoint(){
	fill(51);
	for(pt of points){
		ellipse(pt.x*width,pt.y*height,10,10);
	}
}

function drawLine(){
	var x1 = 0;
  var y1 = m * x1 + c;
  var x2 = 1;
  var y2 = m * x2 + c;
	stroke(255);
  line(x1 * width, y1 * height, x2 * width, y2 * height);
}











