var starObj = function() {
	this.x;
	this.y;

	this.picNo;

	this.timer;

	this.direction;

	this.xSped;
	this.ySped;
}

// 初始化
starObj.prototype.init = function() {
	this.x = Math.random() * girl_width + girl_x;
	this.y = Math.random() * girl_height + girl_y;

	this.picNo = Math.floor(Math.random() * 7);

	this.timer = 0;

	this.xSped = Math.random() * 5 - 2.5;
	this.ySped = Math.random() * 5 - 2.5;

}

// 画星星
starObj.prototype.draw = function() {
	ctx.drawImage(starPic, star_size * this.picNo, 0, star_size, star_size, this.x, this.y, star_size, star_size);
}

// 更新序列
starObj.prototype.update = function() {
	this.x += this.xSped * deltaTime * 0.004;
	this.y += this.ySped * deltaTime * 0.004;

	if ((this.x < girl_x) || (this.x > girl_x + girl_width) ||
		(this.y < girl_y) || (this.y > girl_y + girl_height)) {
		this.init();
	}

	this.timer += deltaTime;
	if (this.timer > 50) {
		this.timer = 0;

		this.picNo ++;
		this.picNo %= 7;
	}	
}

//画所有星星
function drawStars(){
	for(var i = 0; i < num; i++) {
		stars[i].update();
		stars[i].draw();
	}
}