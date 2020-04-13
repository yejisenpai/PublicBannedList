(function(){
	window.onclick = function(event){

		var heart = document.createElement("b");	//创建b元素
		heart.onselectstart = new Function('event.returnValue=false');	//防止拖动
		
		var x = 1 , y = 25565	//随机数范围 X-Y 顺序随意 会自动判断 可为负数
		var rn=String(Math.min(x,y)+(Math.floor(Math.random()*(Math.max(x,y)-Math.min(x,y)+1))));	//生成随机数
		var rn= "+" + rn	//加上 "+" 号

		document.body.appendChild(heart).innerHTML = rn;		//将b元素添加到页面上
		heart.style.cssText = "position: fixed;left:-100%;";	//给p元素设置样式

		var f = 16, 	// 字体大小
            x = event.clientX - f / 2, // 横坐标
            y = event.clientY - f, // 纵坐标
            c = randomColor(),  // 随机颜色
            a = 1, 				// 透明度
            s = 0.8; 			// 放大缩小

		var timer = setInterval(function(){		//添加定时器
			if(a <= 0){
				document.body.removeChild(heart);
				clearInterval(timer);
			}else{
				heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";

                y--;
                a -= 0.016;
                s += 0.002;
			}
		},15)

	}
	 // 随机颜色
    function randomColor() {

        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";

    }
}());