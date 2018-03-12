class Bubble{
	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = 0;
	}
	move(){
		this.x += random(-2,2);
		this.y += random(-2,2);

	}
	clicked(x, y){
		let d = dist(x, y, this.x, this.y);
		if (d < this.r){
			this.color = random(0, 255);
			//console.log("bubble clicked!");
		}
	}
	show(){
		stroke(255);
		//strokeWidth(4);
		fill(this.color);
		ellipse(this.x, this.y, this.r);
	}
	
}

let bubbles = [];


function setup() {
	createCanvas(600, 400);
	for (var i = 0; i < 10; i++) {
		let x = random(width);
		let y = random(height);
		let r = random(10,100);
		let newBubble = new Bubble(x, y, r);
		bubbles.push(newBubble); 

	}
}


function draw() {
	background(0);
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}
	
}
function mouseClicked(){
	for (var i =0; i < bubbles.length; i++){
		bubbles[i].clicked(mouseX, mouseY);
	}
	
}
