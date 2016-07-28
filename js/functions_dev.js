// variables
var 
$window = $(window), gardenCtx, gardenCanvas, $garden, garden;

var clientWidth = $(window).width();

var clientHeight = $(window).height();

var dist = "";

$(function () {
    // setup garden
	
	$loveHeart = $("#loveHeart");

	var offsetX = 0;
	
	var offsetY = 0;
    
	$garden = $("#garden");
    
	gardenCanvas = $garden[0];
	
	gardenCanvas.width = $("#loveHeart").width();
    
	gardenCanvas.height = $("#loveHeart").height()
    gardenCtx = gardenCanvas.getContext("2d");
   
	gardenCtx.globalCompositeOperation = "lighter";
    
	garden = new Garden(gardenCtx, gardenCanvas);
	
	
	$("#content").css("width", $loveHeart.width() + $("#code").width());
	
	$("#content").css("height", Math.max($loveHeart.height(), $("#code").height()));
	
	$("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));
	
	$("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));

    // renderLoop
    
	setInterval(function () {
        garden.render();
    }, Garden.options.growSpeed);
});


	$(window).resize(function() {
    
		var newWidth = $(window).width();
    
		var newHeight = $(window).height();
    
		if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
	
});
	

function getHeartPoint(t) {
	if(t<9) {
		var x = 183;

		var y = 126 + 30 * t;

		return new Array(offsetX + x, offsetY + y);
	}
    if(t<12&&t>=9) {
        var x = 213+30*(t-9);

        var y = 134;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<20&&t>=12) {
        var x = 273;

        var y = 164+30*(t-12);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<22&&t>=20) {
        var x = 213+30*(t-20);

        var y = 234;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<24&&t>=22) {
        var x = 213+30*(t-22);

        var y = 343;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<29&&t>=24) {
        var x = 348-13*(t-24);

        var y = 97+28*(t-24);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<33&&t>=29) {
        var x = 351+30*(t-29);

        var y = 155;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<41&&t>=33) {
        var x = 450-3*(t-33);

        var y = 185+30*(t-33);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<43&&t>=41) {
        var x = 432-30*(t-40);

        var y = 395-12*(t-40);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<46&&t>=43) {
        var x = 337+15*(t-43);

        var y = 198+19*(t-43);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<50&&t>=46) {
        var x = 308+27*(t-46);

        var y = 328-13*(t-46);

        return new Array(offsetX + x, offsetY + y);
    }
}
var dist = "";

function startHeartAnimation() {
	
	var interval = 220;
	
	var angle = 0;
	
	var heart = new Array();
	
	var animationTimer = setInterval(function () {
		
		var bloom = getHeartPoint(angle);
		
		var draw = true;
		
		for (var i = 0; i < heart.length; i++) {
			
			var p = heart[i];
			
			var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
			
			if (distance < Garden.options.bloomRadius.max * 1.3) {
				
				//draw = false;
				
				//break;
			
			}
		
		}
		
		if (draw) {
			
			heart.push(bloom);
			
			garden.createRandomBloom(bloom[0], bloom[1]);
		
		}
		
		if (angle >= 49) {
			
			clearInterval(animationTimer);
			
			showMessages();
		}  else {
			angle += 1;
		}
	
	}, interval);

}
	

(function($) {
	
		$.fn.typewriter = function() {
		
			this.each(function() {
			
				var $ele = $(this), str = $ele.html(), progress = 0;
			
				$ele.html('');
			
				var timer = setInterval(function() {
				
					var current = str.substr(progress, 1);
				
					if (current == '<') {
					
						progress = str.indexOf('>', progress) + 1;
				
					} else {
					
						progress++;
				
					}
				
					$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				
					if (progress >= str.length) {
					
						clearInterval(timer);
				
					}
			
				}, 75);
		
			});
		
			return this;
	
		};
	
})(jQuery);


function timeElapse(date){
	
		var current = Date();
	
		var seconds = (Date.parse(date) - Date.parse(current)) / 1000;
	
		var days = Math.floor(seconds / (3600 * 24));
	
		seconds = seconds % (3600 * 24);
	
		var hours = Math.floor(seconds / 3600);
	
		if (hours < 10) {
		
			hours = "0" + hours;
		}
	
		seconds = seconds % 3600;
	
		var minutes = Math.floor(seconds / 60);
	
		if (minutes < 10) {
		
			minutes = "0" + minutes;
	
		}
	
		seconds = seconds % 60;
	
		if (seconds < 10) {
		
			seconds = "0" + seconds;
	
		}
	
		var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds"; 
	
		$("#elapseClock").html(result);
	
}


function showMessages() {
	
		adjustWordsPosition();
	
		$('#messages').fadeIn(5000, function() {
		
			showLoveU();
	
		});
}
	

function adjustWordsPosition() {
	
		$('#words').css("position", "absolute");
	
		$('#words').css("top", $("#garden").position().top + 195);
	
		$('#words').css("left", $("#garden").position().left + 70);
	
}


function adjustCodePosition() {
	
		$('#code').css("margin-top", ($("#garden").height() - $("#code").height()) / 2);
	
}
	

function showLoveU() {
	
		$('#loveu').fadeIn(3000);

}