var starObj = function() {
	this.x;
	this.y;

	this.picNo;

	this.timer;

	this.direction;
}

// 初始化
starObj.prototype.init = function() {
	this.x = Math.random() * girl_width + girl_x;
	this.y = Math.random() * girl_height + girl_y;

	this.picNo = Math.floor(Math.random() * 7);

	this.timer = 0;

	this.direction = Math.floor(Math.random() * 4);
}

// 画星星
starObj.prototype.draw = function() {
	ctx.drawImage(starPic, 7 * this.picNo, 0, 7, 7, this.x, this.y, 7, 7);
}

// 更新序列
starObj.prototype.update = function() {
	this.timer += deltaTime;
	if (this.timer > 50) {
		this.timer = 0;

		this.picNo ++;
		this.picNo %= 7;
		
		if(this.picNo == 0) {
			switch(this.direction) {
				case 0:
					this.y -= 2;
					break;
				case 1:
					this.x += 2;
					break;
				case 2:
					this.y += 2;
					break;
				case 3:
					this.x -= 2;
					break;
			}

			if ((this.x < girl_x) || (this.x > girl_x + girl_width) ||
				(this.y < girl_y) || (this.y > girl_y + girl_height)) {
				this.x = Math.random() * girl_width + girl_x;
				this.y = Math.random() * girl_height + girl_y;
				this.direction = Math.floor(Math.random() * 4);
				this.picNo = 0;
			}
		}
	}	
}

//画所有星星
function drawStars(){
	for(var i = 0; i < num; i++) {
		stars[i].update();
		stars[i].draw();
	}
}