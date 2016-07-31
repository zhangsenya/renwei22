	//background-image:url(../images/home1.JPG);
//定义Vector构造函数
		function Vector(x, y) {
	        this.x = x;
	        this.y = y;
	    };
		//定义Vector旋转、按比例放大、克隆、长度、相减等方法
		Vector.prototype = {
	        rotate: function (theta) {
	            var x = this.x;
	            var y = this.y;
	            this.x = Math.cos(theta) * x - Math.sin(theta) * y;
	            this.y = Math.sin(theta) * x + Math.cos(theta) * y;
	            return this;
	        },
	        mult: function (f) {
	            this.x *= f;
	            this.y *= f;
	            return this;
	        },
	        clone: function () {
	            return new Vector(this.x, this.y);
	        },
	        length: function () {
	            return Math.sqrt(this.x * this.x + this.y * this.y);
	        },
	        subtract: function (v) {
	            this.x -= v.x;
	            this.y -= v.y;
	            return this;
	        },
	        set: function (x, y) {
	            this.x = x;
	            this.y = y;
	            return this;
	        }
	    };
		//定义花的两片花瓣,起始角度,终止角度,成长因素,和花
	    function Petal(stretchA, stretchB, startAngle, angle, growFactor, bloom) {
	        this.stretchA = stretchA;
	        this.stretchB = stretchB;
	        this.startAngle = startAngle;
	        this.angle = angle;
	        this.bloom = bloom;
	        this.growFactor = growFactor;
	        this.r = 1;
	        this.isfinished = false;
	        //this.tanAngleA = Garden.random(-Garden.degrad(Garden.options.tanAngle), Garden.degrad(Garden.options.tanAngle));
	        //this.tanAngleB = Garden.random(-Garden.degrad(Garden.options.tanAngle), Garden.degrad(Garden.options.tanAngle));
	    }
		//定义花瓣的画法,取得花园的ctx
	    Petal.prototype = {
	        draw: function () {
	            var ctx = this.bloom.garden.ctx;
	            var v1, v2, v3, v4;
	            v1 = new Vector(0, this.r).rotate(Garden.degrad(this.startAngle));
	            v2 = v1.clone().rotate(Garden.degrad(this.angle));
	            v3 = v1.clone().mult(this.stretchA); //.rotate(this.tanAngleA);
	            v4 = v2.clone().mult(this.stretchB); //.rotate(this.tanAngleB);
	            ctx.strokeStyle = this.bloom.c;
	            ctx.beginPath();
	            ctx.moveTo(v1.x, v1.y);
	            ctx.bezierCurveTo(v3.x, v3.y, v4.x, v4.y, v2.x, v2.y);
	            ctx.stroke();
	        },
	        render: function () {
	            if (this.r <= this.bloom.r) {
	                this.r += this.growFactor; // / 10;
	                this.draw();
	            } else {
	                this.isfinished = true;
	            }
	        }
	    }

	    function Bloom(p, r, c, pc, garden) {
	        this.p = p;
	        this.r = r;
	        this.c = c;
	        this.pc = pc;//定义花瓣数量
	        this.petals = [];//装花瓣的数组
	        this.garden = garden;
	        this.init();
	        this.garden.addBloom(this);
	    }
	    Bloom.prototype = {
	        draw: function () {
	            var p, isfinished = true;
	            this.garden.ctx.save();
	            this.garden.ctx.translate(this.p.x, this.p.y);
	            for (var i = 0; i < this.petals.length; i++) {
	                p = this.petals[i];
	                p.render();
	                isfinished *= p.isfinished;
	            }
	            this.garden.ctx.restore();//返回restore
	            if (isfinished == true) {
	                this.garden.removeBloom(this);
	            }//
	        },
	        init: function () {
	            var angle = 360 / this.pc;
	            var startAngle = Garden.randomInt(0, 90);
	            for (var i = 0; i < this.pc; i++) {
	                this.petals.push(new Petal(Garden.random(Garden.options.petalStretch.min, Garden.options.petalStretch.max), Garden.random(Garden.options.petalStretch.min, Garden.options.petalStretch.max), startAngle + i * angle, angle, Garden.random(Garden.options.growFactor.min, Garden.options.growFactor.max), this));
	            }
	        }
	    }
		//定义花园ctx,element
	    function Garden(ctx, element) {
	        this.blooms = [];
	        this.element = element;
	        this.ctx = ctx;
	    }
		
	    Garden.prototype = {
			//画花园里的花
	        render: function () {
	            for (var i = 0; i < this.blooms.length; i++) {
	                this.blooms[i].draw();
	            }
	        },
			//为数组添加花
	        addBloom: function (b) {
	            this.blooms.push(b);
	        },
			//移除花
	        removeBloom: function (b) {
	            var bloom;
	            for (var i = 0; i < this.blooms.length; i++) {
	                bloom = this.blooms[i];
	                if (bloom === b) {
	                    this.blooms.splice(i, 1);
	                    return this;
	                }
	            }
	        },
			//创建随机花,一个Vector在x,y的地方,半径为min到max之间,颜色为在一定范围内随机,数量为一定范围内随机
	        createRandomBloom: function (x, y) {
	            this.createBloom(x, y, Garden.randomInt(Garden.options.bloomRadius.min, Garden.options.bloomRadius.max), Garden.randomrgba(Garden.options.color.rmin, Garden.options.color.rmax, Garden.options.color.gmin, Garden.options.color.gmax, Garden.options.color.bmin, Garden.options.color.bmax, Garden.options.color.opacity), Garden.randomInt(Garden.options.petalCount.min, Garden.options.petalCount.max));
	        },
	        createBloom: function (x, y, r, c, pc) {
	            new Bloom(new Vector(x, y), r, c, pc, this);
	        },
			//消除花,清楚element
	        clear: function () {
	            this.blooms = [];
	            this.ctx.clearRect(0, 0, this.element.width, this.element.height);
	        }
	    }

	    Garden.options = {
	        petalCount: {
	            min: 8,
	            max: 15
	        },
	        petalStretch: {
	            min: 0.1,
	            max: 3
	        },
	        growFactor: {
	            min: 0.1,
	            max: 1
	        },
	        bloomRadius: {
	            min: 8,
	            max: 10
	        },
			//定义密度
	        density: 10,
	        growSpeed: 1000 / 60,
	        color: {
				rmin: 0,
				rmax: 128,
				gmin: 128,
				gmax: 255,
				bmin: 0,
				bmax: 128,
	            opacity: 0.1
	        },
	        tanAngle: 60
	    };
	    Garden.random = function (min, max) {
	        return Math.random() * (max - min) + min;
	    };
	    Garden.randomInt = function (min, max) {
	        return Math.floor(Math.random() * (max - min + 1)) + min;
	    };
		
	    Garden.circle = 2 * Math.PI;
		//将角度转换成弧度degrad
	    Garden.degrad = function (angle) {
	        return Garden.circle / 360 * angle;
	    };
		//将弧度转换为角度raddeg
	    Garden.raddeg = function (angle) {
	        return angle / Garden.circle * 360;
	    };
		//得到rgb的颜色
	    Garden.rgba = function (r, g, b, a) {
	        return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	    };
		//获取随机颜色
	    Garden.randomrgba = function (rmin, rmax, gmin, gmax, bmin, bmax, a) {
			var r = Math.round(Garden.random(rmin, rmax));
			var g = Math.round(Garden.random(gmin, gmax));
			var b = Math.round(Garden.random(bmin, bmax));
			var limit = 5;
			if (Math.abs(r - g) <= limit && Math.abs(g - b) <= limit && Math.abs(b - r) <= limit) {
				return Garden.randomrgba(rmin, rmax, gmin, gmax, bmin, bmax, a);
			} else {
				return Garden.rgba(r, g, b, a);
			}
	    };