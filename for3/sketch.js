function setup() {
	createCanvas(windowWidth, windowHeight);
	
	
	var gridSize = 20;

	//nested for loop
	// basically used for 2 dimentional things
	for(var x = 0; x < width; x += gridSize){
		for(var y = 0; y < height; y += gridSize){

			noStroke();

			//generate a random num from 0-3
			var tileType = int(random(6));

			//
			if(tileType == 0){
				var x1 = x;
				var y1 = y + gridSize;
				var x2 = x + gridSize;
				var y2 = y1;
				var x3 = x + (gridSize/2);
				var y3 = y;

				fill(0);

				triangle(x1,y1,x2,y2,x3,y3);
			}

			if(tileType == 1){
				fill(0);
				ellipse(x + gridSize/2, y+gridSize/2, gridSize, gridSize);
			}
		}
	}
			
}

function draw() {
	
}	