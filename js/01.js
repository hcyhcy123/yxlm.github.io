$(function(){
//	全局变量
//左侧轮播
	var c = 0;
	var xwls = $(".xw-ls a").length
	var xwlx = $(".xw-lx li").length
//	1.定义自动切换效果
	function abc(){
		c++;
		if(c==xwls){
			$(".xw-ls").css({left:0})
			c=1;
		}
		$(".xw-ls").animate({left:c*-680+"px"},500)
		
		if(c==xwlx){
			$(".xw-lx li").eq(0).addClass("active").siblings().removeClass("active")
		}else{
			$(".xw-lx li").eq(c).addClass("active").siblings().removeClass("active")
		}
	}
	
//	鼠标点击下方标签切换图片
	function bcd(e){
		c = e.index();
		$(".xw-lx li").eq(c).addClass("active").siblings().removeClass("active");
		$(".xw-ls").animate({left:c*-680+"px"},100);
	}
	
//	定时器:每2秒执行一次
	var time = setInterval(abc,4000);
	
//	鼠标移入.xw-ls元素后,停止定时器
	$(".xw-lx  li,.xw-ls a").mouseenter(function(){
		clearInterval(time);
	});
	
//	鼠标移出.xw-ls元素后,开始定时器
	$(".xw-lx  li,.xw-ls a").mouseleave(function(){
		time = setInterval(abc,4000)
	});
	
//	鼠标点击下方标签
	$(".xw-lx li").mouseenter(function(){
		bcd($(this));
	})
//--------------------------------------------------------
	
	
//	右侧公告栏
	function aaa(m){

		w = m.index()
		$(".xw-r .xw-rnr").eq(w).show().siblings(".xw-rnr").hide();
		$("#t1 li").eq(w).children("a").addClass("active2").parent().siblings().children().removeClass("active2");
	}
	
	$("#t1 li").mouseenter(function(){
			aaa($(this));
	});
//	下方阅读更多
	$(".xw-r .ydgd").mouseenter(function(){
			$(this).css({backgroundColor:"#CACACA"})
	});
	$(".xw-r .ydgd").mouseleave(function(){
			$(this).css({backgroundColor:"#DAD8D8"})
	});
	
//--------------------------------------------------------------	
//	热门活动左侧
	$(".rmhd-tu a").mouseenter(function(){
		$(this).css({top:"-6px"})
	})
	$(".rmhd-tu a").mouseleave(function(){
		$(this).css({top:"0px"})
	})
	
	$(".rmhd-tu a").mouseenter(function(){
		$(this).children(".tzt").addClass("xs").removeClass("yc")
	})
	$(".rmhd-tu a").mouseleave(function(){
		$(this).children(".tzt").addClass("yc").removeClass("xs")
	})
	function rrr(m){

		w = m.index()
		$(".rmhd-l .rmhd-box").eq(w).show().siblings(".rmhd-box").hide();
		$(".rm-nav li").eq(w).addClass("active3").siblings().removeClass("active3");
	}
	
	$(".rm-nav li").mouseenter(function(){
		rrr($(this));
	})
	
//	新英雄
	$(".xyx a").mouseenter(function(){
		$(this).children(".tzt").addClass("xs").removeClass("yc")
	})
	$(".xyx a").mouseleave(function(){
		$(this).children(".tzt").addClass("yc").removeClass("xs")
	})
	
//	新皮肤
	$(".xyx .dhp").mouseenter(function(){
		$(".ycbox").show();
	})
	$(".ycbox").mouseleave(function(){
		$(".ycbox").hide();
	})
	
//	热门活动图标
	$(".ycbox li").mouseenter(function(){
		$(this).css({backgroundSize:"110%,110%"})
	})
	$(".ycbox li").mouseleave(function(){
		$(this).css({backgroundSize:"100%,100%"})
	})
	
//	版本更新
	$(".bb .bbgx").mouseenter(function(){
		$(".bb .bbgx-li").show()
	})
	$(".bb .bbgx-li").mouseleave(function(){
		$(this).hide()
	})
	
//		开发者日志
	$(".bb .kfz").mouseenter(function(){
		$(".bb .kfz-li").show();
	})
	$(".bb .kfz-li").mouseleave(function(){
		$(this).hide()
	})
	
//	城邦传说
	$(".bb .cbcs").mouseenter(function(){
		$(".bb .cbcs-li").show();
	})
	$(".bb .cbcs-li").mouseleave(function(){
		$(this).hide()
	})

//	周免
	$(".bb .zm").mouseenter(function(){
		$(".bb .zm p").css({fontWeight:"700"});
	})
	$(".bb .zm").mouseleave(function(){
		$(".bb .zm p").css({fontWeight:"normal"});
	})
	
//	最新视频
	$(".zx-nav li").mouseenter(function(){
		$(this).addClass("xs").removeClass("yc")
	})
function bbb(m){

		w = m.index()
		$(".zxsp .zxsp-tu").eq(w).show().siblings(".zxsp-tu").hide();
		$(".ty-nav li").eq(w).addClass("active3").siblings().removeClass("active3");
	}
	
	$(" .ty-nav li").mouseenter(function(){
		bbb($(this));
	})
	
	function ccc(m){
		w = m.index()
		$(".rmbj-nav .rmbj-tu").eq(w).show().siblings(".rmbj-tu").hide();
		$(".bj-nav li").eq(w).addClass("active3").siblings().removeClass("active3");
	}
	
	$(".bj-nav li").mouseenter(function(){
		ccc($(this));
	})
	
//	赛事中心
	var f =0
	var f1 = $(".ss-lb .lbbox").length-1
	function prev(){
			f--;
			if(f<1){
				f =0;
			}
			$(".ss-lb").animate({left:f*-1200+"px"},1000);
	};	
		//右耳朵单击切换
		function next(){
			f++;
			if(f>f1){
				f =f1;
			}
			$(".ss-lb").animate({left:f*-1200+"px"},1000);	
			
		};
		//左耳朵单击事件
		$(".dasszx .zed").click(function(){
			prev();
		});
		
		//右耳朵单击事件
		$(".dasszx .yed").click(function(){
			next();
		});	
		
//		英雄资料
	function eee(m){

		w = m.index()
		$(".yx ul").eq(w).show().siblings().hide();
		$(".yx-nav li").eq(w).addClass("active4").siblings().removeClass("active4");
	}
	
	$(" .yx-nav li").click(function(){
		eee($(this));
	})
//	FANART创作馆
//	FANART创作馆
	$(".cz-ul li").mouseenter(function(){
		$(this).children(".pd").show();
	})
	$(".cz-ul li").mouseleave(function(){
		$(this).children(".pd").hide();
	})
	
//	教你一招
	$(" .cz-r img").mouseenter(function(){
		$(this).animate({top:-30+"px"},500)
	})
	$(" .cz-r img").mouseleave(function(){
		$(this).animate({top:"0"},500)
	})
})