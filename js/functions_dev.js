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
	if(t<6) {
		var x = 176-15*t;

		var y = 117 + 27 * t;

		return new Array(offsetX + x, offsetY + y);
	}
    if(t<13&&t>=6) {
        var x = 149;

        var y = 198+27*(t-6);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<19&&t>=13) {
        var x = 326-28*(t-13);

        var y = 132+4*(t-13);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<25&&t>=19) {
        var x = 179+32*(t-19);

        var y = 238;

        return new Array(offsetX + x, offsetY + y);
    }

    if(t<31&&t>=25) {
        var x = 261;

        var y = 172+28*(t-25);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<37&&t>=31) {
        var x = 165+30*(t-30);

        var y = 341;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<39&&t>=37) {
        var x = 428+13*(t-37);

        var y = 128+21*(t-37);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<46&&t>=39) {
        var x = 507-6*(t-39);

        var y = 113+19*(t-39);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<51&&t>=46) {
        var x = 465-20*(t-46);

        var y = 246+24*(t-46);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<58&&t>=51) {
        var x = 398+33*(t-51);

        var y = 192;

        return new Array(offsetX + x, offsetY + y);
    }
	if(t<63&&t>=58) {
		var x = 596-6*(t-57);

		var y = 192+32*(t-57);

		return new Array(offsetX + x, offsetY + y);
	}
    if(t<65&&t>=63) {
        var x = 566-29*(t-62);

        var y = 352-8*(t-62);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<68&&t>=65) {
        var x = 513+19*(t-65);

        var y = 232+17*(t-65);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<73&&t>=68) {
        var x = 725-15*(t-68);

        var y = 132+29*(t-68);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<79&&t>=73) {
        var x = 730+30*(t-73);

        var y = 178;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<84&&t>=79) {
        var x = 725+30*(t-79);

        var y = 253;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<92&&t>=84) {
        var x = 785;

        var y = 109+30*(t-84);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<99&&t>=92) {
        var x = 685+32*(t-92);

        var y = 349;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<102&&t>=99) {
        var x = 963-11*(t-99);

        var y = 182+25*(t-99);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<104&&t>=102) {
        var x = 1008+20*(t-102);

        var y = 177+30*(t-102);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<114&&t>=104) {
        var x = 988;

        var y = 111+30*(t-104);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<119&&t>=114) {
        var x = 1035+30*(t-114);

        var y = 161;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<121&&t>=119) {
        var x = 1155;

        var y = 191+27*(t-119);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<128&&t>=121) {
        var x = 1019+28*(t-121);

        var y = 245;

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<133&&t>=128) {
        var x = 1089;

        var y = 109+30*(t-128);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<135&&t>=133) {
        var x = 1089-10*(t-132);

        var y = 243+25*(t-132);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<138&&t>=135) {
        var x = 1059-26*(t-135);

        var y = 318+21*(t-135);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<140&&t>=138) {
        var x = 1105+10*(t-137);

        var y = 243+20*(t-137);

        return new Array(offsetX + x, offsetY + y);
    }
    if(t<143&&t>=140) {
        var x = 1135+18*(t-140);

        var y = 303+25*(t-140);

        return new Array(offsetX + x, offsetY + y);
    }
}



var dist = "";

function startHeartAnimation() {
	
	var interval = 110;
	
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
		
		if (angle >= 142) {
			
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
