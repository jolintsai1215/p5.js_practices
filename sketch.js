var bubbles = [];
class Bubble{
	constructor(x, y ,r){
		this.x = x;
		this.y = y;
		this.r = r;

	}
	move(){
		this.x += random(-5, 5);
		this.y += random(-5, 5);

	}
	show(){
		stroke(255);
		ellipse(this.x, this.y, this.r);
		fill(random(0,255), random(0,255), random(0,255));

	}
}

function setup() {
	createCanvas(600, 400);
	for (var i = 0; i < 100; i++) {
		var x = random(width);
		var y = random(height);
		var r = random(10,100)
		bubbles[i] = new Bubble(x, y, r);
	}
	

}

function draw() {
	background(0);
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}

}

