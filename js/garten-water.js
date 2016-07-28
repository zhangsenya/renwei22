function Vector(x,y){
	this.x = x;
	this.y = y;
}
Vector.prototype = {
	rotate:function(degree){
		var x = this.x;
		var y = this.y;
		this.x = x * Math.cos(degree) - y * Math.sin(degree);
		this.y = x * Math.sin(degree) + y * Math.cos(degree);//错误,没return
		return this;
	},	
	multiply:function(mul){
		this.x *= mul;
		this.y *= mul;
		return this;
	},
	length:function(){
		return Math.sqrt(this.x*this.x+this.y*this.y);
	},
	clone:function(){
		return new Vector(this.x,this,y);
	},

	subtract: function (v) {
		this.x -= v.x;
	    this.y -= v.y;
	    return this;
	},//不懂意思
	set: function (x, y) {
	    this.x = x;
	    this.y = y;
		return this;
	}
	            
}
function Petal(stretchA,stretchB,angle,startAngle,growSpeed,bloom){
	this.stretchA = stretchA;
	this.stretchB = stretchB;
	this.angle = angle;
	this.startAngle = startAngle;
	this.growSpeed = growSpeed;
	this.bloom = bloom;
	this.r = 1;
	this.isFinished = false;
}
Petal.degRad = function(angle){
	return angle*Math.PI/180
}
Petal.prototype = {
	draw:function(){
		var ctx = this.bloom.garden.ctx;
		var v1,v2,v3,v4;
		v1 = new Vector(0,this.r).rotate(Petal.degRad(this.startAngle));
		v2 = v1.rotate(Petal.degRad(this.angle));
		v3 = v1.clone().multiply(this.stretchA);
		v4 = v1.clone().multiply(this.stretchA);
		ctx.strokeStyle = this.bloom.c;
		ctx.beginPath();
		ctx.moveTo(v1.x, v1.y);
		ctx.bezierCurveTo(v3.x, v3.y, v4.x, v4.y, v2.x, v2.y);
		ctx.stroke();
	},
	render:function(){
		if(this.r <= this.bloom.r){
			this.r += this.growSpeed;
			this.draw();
		}else{
			this.isFinished = true;
		}	
	}
}
function Bloom(petal,color,garden){}