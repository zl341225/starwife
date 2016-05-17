var can;
var ctx;

var w;
var h;

var girlPic = new Image();
var starPic = new Image();

var girl_x = 0;
var girl_y = 0;

var girl_width = 1000;
var girl_height = 667;

var stars = [];
var num = 120;

var lastTime;
var deltaTime;

function init() {
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;

	girlPic.src = "src/wife.jpg";
	starPic.src = "src/star.png";

	for (var i = 0; i < num; i++) {
		var obj = new starObj();
		obj.init();
		stars.push(obj);
	}
	lastTime = Date.now();
	gameLoop();
}

function gameLoop() {
	window.requestAnimationFrame(gameLoop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	fillCanvas();

	drawGirl();

	drawStars();
}

document.body.onload = init;

function fillCanvas() {
	ctx.fillStyle="#999";
	ctx.fillRect(0, 0, w, h);
}

function drawGirl() {
	ctx.drawImage(girlPic, girl_x, girl_y, girl_width, girl_height);
}