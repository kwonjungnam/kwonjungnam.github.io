$(document).ready(function(){
	
	//menu 
	$("nav").mouseover(function(){
		$(".submenu").stop().slideDown();
	}).mouseout(function(){
		$(".submenu").stop().slideUp();
	})
	
	//slide 
	
	var num=0;
	var move_p;
	
	setInterval(function(){
		if(num<2){num++;
		}else{num=0;}
		move_p=num*(-300)+"px";
		$(".slider").animate({
			top:move_p
		})
	},3000)
	
	//tab 
	
	$(".tab1").click(function(){
		$(".cont1").show();
		$(".cont2").hide();
		$(".tab1").addClass("on");
		$(".tab2").removeClass("on");
	})
	$(".tab2").click(function(){
		$(".cont2").show();
		$(".cont1").hide();
		$(".tab2").addClass("on");
		$(".tab1").removeClass("on");
	})
	
	//popup
	
	$(".pop").click(function(){
		$("#popup").show();
	})
	$(".close").click(function(){
		$("#popup").hide();
	})
})//ready end