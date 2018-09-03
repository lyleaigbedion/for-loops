function setup() {
	createCanvas(windowWidth, windowHeight);
	

}

function draw() {
	
	background(255);

	var circleSize = 50;

	for(var x = circleSize/2; x< width; x += circleSize){

		var myFill = map(x,0, width, 0, 255);
		fill(myFill);

		ellipse(x, mouseY, circleSize, circleSize);

	}

}