const canvas = document.getElementById("myCanvas");
	const ctx = canvas.getContext("2d");
	const hero = new Image();
	hero.src = './img_jeu/vaisseau_sida.png';
	const bullets = new Image();
	bullets.src = './img_jeu/fireball_1.png';
	const ennemie_1 = new Image();
	ennemie_1.src = './img_jeu/vih.png';
	const ennemie_2 = new Image();
	ennemie_2.src = './img_jeu/virus_2.png';
	const ennemie_3 = new Image();
	ennemie_3.src = './img_jeu/virus_3.png';
	const ennemie_4 = new Image();
	ennemie_4.src = './img_jeu/virus_4.png';

	var score = 0;
	var vie = 3;
	var max = 480;
	var x =  canvas.width/2;
	var y = 50;
	var dx = 1;
	var dy = 1;

	var rightPressed = false;
	var leftPressed = false;
	var spacePressed = false;

	var bullet_x = -100;
	var bullet_y = -100;

	var multiplicateur_vitesse = 1.0;

	var ennemie_x_1 = canvas.width/2;
	var ennemie_y_1 = 350;
	var ennemie_x_2 = canvas.width/2-100;
	var ennemie_y_2 = 700;
	var ennemie_x_3 = canvas.width/2+100;
	var ennemie_y_3 = 900;
	var ennemie_x_4 = canvas.width/2-150;
	var ennemie_y_4 = 1200;

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);


	function draw_hero(){
		if(vie<1)return;
		multiplicateur_vitesse += 0.0000001;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ennemie_y_1 -= 0.5;
		if(rightPressed){
			x += dx;
			if(x-dx > 430){
				x -= dx;
			}
		}else if(leftPressed) {
    		x -= dx;
    		if (x+dx < 0){
        		x += dx;
    		}
		}
			ennemie_y_2 -= 0.9*multiplicateur_vitesse;
			if(ennemie_y_2<0){
				ennemie_y_2 = 350;
				ennemie_x_2 =  Math.floor(Math.random() *  Math.floor(Math.random() * max));
				vie -= 1;
			}
			if(bullet_x > ennemie_x_2 - 50 && bullet_x < ennemie_x_2 + 50 && bullet_y > ennemie_y_2 - 10 && bullet_y < ennemie_y_2 + 10){
				ennemie_y_2 = 400;
				ennemie_x_2 =  Math.floor(Math.random() *  Math.floor(Math.random() * max));
				score += 20;	
				bullet_y = 700;
			}
			ennemie_y_1 -= 1*multiplicateur_vitesse;
			if(ennemie_y_1<0){
				ennemie_y_1 = 350;
				ennemie_x_1 =  Math.floor(Math.random() *  Math.floor(Math.random() * max));
				vie -= 1;
			}
			if(bullet_x > ennemie_x_1 - 50 && bullet_x < ennemie_x_1 + 50 && bullet_y > ennemie_y_1 - 10 && bullet_y < ennemie_y_1 + 10){
				ennemie_y_1 = 400;
				ennemie_x_1 =  Math.floor(Math.random() *  Math.floor(Math.random() * max));	
				score += 20;
				bullet_y = 700;
			}
			ennemie_y_3 -= 0.6*multiplicateur_vitesse;
			if(ennemie_y_3<0){
				ennemie_x_3 =  Math.floor(Math.random() *  Math.floor(Math.random() * max));
				ennemie_y_3 = 350;
				vie -= 1;
			}
			if(bullet_x > ennemie_x_3 - 50 && bullet_x < ennemie_x_3 + 50 && bullet_y > ennemie_y_3 - 10 && bullet_y < ennemie_y_3 + 10){
				ennemie_x_3 =  Math.floor(Math.random() *  Math.floor(Math.random() * max));
				ennemie_y_3 = 400;	
				score += 20;
				bullet_y = 700;
			}
			ennemie_y_4 -= 0.2*multiplicateur_vitesse;
			if(ennemie_y_4<0){
				ennemie_y_4 = 350;
				ennemie_x_4 =  Math.floor(Math.random() *  Math.floor(Math.random() * max));
				vie -= 1;
			}
			if(bullet_x > ennemie_x_4 - 50 && bullet_x < ennemie_x_4 + 50 && bullet_y > ennemie_y_4 - 10 && bullet_y < ennemie_y_4 + 10){
				ennemie_x_2 =  Math.floor(Math.random() *  Math.floor(Math.random() * max));
				ennemie_y_4 = 400;
				score += 20;	
				bullet_y = 700;
			}
			ctx.drawImage(hero, x, y,50,30);
			ctx.beginPath();
			ctx.closePath();
			ctx.font = '48px serif';
  			ctx.fillText(score, 10, 50);
  			ctx.fillText("Vie:"+vie, 360, 50);
	}

	function draw_missile(){
		bullet_y += 1;
		if(bullet_x>0 && bullet_x<canvas.width && bullet_y>0&& bullet_y<canvas.height){
		ctx.drawImage(bullets, bullet_x, bullet_y,30,25);
		ctx.beginPath();
		ctx.closePath()
		}
		if(spacePressed){
			bullet_x = x+10;
			bullet_y = y;
		}
	}

	function draw_ennemie(){
			if(vie<1)return;
			if(ennemie_x_1>0 && ennemie_x_1<canvas.width && ennemie_y_1>0&& ennemie_y_1<canvas.height){
			ctx.drawImage(ennemie_1, ennemie_x_1, ennemie_y_1,50,30);
            ctx.beginPath();
			ctx.closePath();
			}
	}

	function draw_ennemie_2(){
			if(vie<1)return;
			if(ennemie_x_2>0 && ennemie_x_2<canvas.width && ennemie_y_2>0&& ennemie_y_2<canvas.height){
			ctx.drawImage(ennemie_2, ennemie_x_2, ennemie_y_2,50,50);
            ctx.beginPath();
			ctx.closePath();
			}
	}

	function draw_ennemie_3(){
			if(vie<1)return;
			if(ennemie_x_3>0 && ennemie_x_3<canvas.width && ennemie_y_3>0&& ennemie_y_3<canvas.height){
			ctx.drawImage(ennemie_3, ennemie_x_3, ennemie_y_3,50,30);
            ctx.beginPath();
			ctx.closePath();
			}
	}

	function draw_ennemie_4(){
			if(vie<1)return;
			if(ennemie_x_4>0 && ennemie_x_4<canvas.width && ennemie_y_4>0&& ennemie_y_4<canvas.height){
			ctx.drawImage(ennemie_4, ennemie_x_4, ennemie_y_4,50,50);
            ctx.beginPath();
			ctx.closePath();
			}
	}

	function keyDownHandler(e) {
    	if(e.key == "Right" || e.key == "ArrowRight") {
        	rightPressed = true;
    	}
    	else if(e.key == "Left" || e.key == "ArrowLeft") {
        	leftPressed = true;
    	}else if(e.key == "Down"|| e.key=="ArrowDown"){
    		spacePressed = true;
    	}
	}	

	function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }else if(e.key == "Down" || e.key=="ArrowDown"){
    	spacePressed = false;
    }
	}

	function GameOver(){
		if(vie<1){
  			ctx.fillText("Game Over", 130, 180);
  		}
	}

		setInterval(draw_hero, 10);
		setInterval(draw_missile, 10);
		setInterval(draw_ennemie, 10);
		setInterval(draw_ennemie_2, 10);
		setInterval(draw_ennemie_3, 10);
		setInterval(draw_ennemie_4, 10);
		setInterval(GameOver,1000);