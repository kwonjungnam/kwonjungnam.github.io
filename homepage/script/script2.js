$(document).ready(function(){
	
	//menu
	
	$("nav").mouseover(function(){
		$(".submenu").stop().slideDown();
	}).mouseout(function(){
		$(".submenu").stop().slideUp();
	})
	
	//slide
	
	var num=0;
	var img_p;
	
	setInterval(function(){
		if(num<2){num++;
		}else{num=0;}
		img_p=num * (-300)+"px";
		$(".slider").animate({
			top:img_p
		})
		
	},3000)
	
	//tab
	
	$(".btn1").click(function(){
		$(".cont1").show();
		$(".cont2").hide();
		$(".btn1").addClass("on");
		$(".btn2").removeClass("on");
	})
	$(".btn2").click(function(){
		$(".cont2").show();
		$(".cont1").hide();
		$(".btn2").addClass("on");
		$(".btn1").removeClass("on");
	})
	
	//popup
	
	$(".pop").click(function(){
		$("#popup").show();
	})
	$(".close").click(function(){
		$("#popup").hide();
	})
	
})//ready end