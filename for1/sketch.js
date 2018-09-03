function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	fill(255);
	noStroke();

	//for loop iterates thru something
	// an arbitrary num of times
	//for(var i = 0; i < 100; i++){
	//	ellipse(random(width), random(height), 4, 4)
	//}

	for(var x = 0; x < width; x += 10) {
		// map their color like a gradient 
		//lines on the left are black lines on the right are white
		//
		var myStroke = map(x,0,width,0,255);

		stroke(myStroke);


		//stroke(255);
		line(x, 0, x, height);
	}
	for(var y = 0; y < height; y +=10)
		stroke(255);
		line( 0, y, 0, height);

}

function draw() {
	
	
}