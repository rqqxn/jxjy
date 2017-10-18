$(document).ready(function(){
	$('#icon_click').click(function(){
		$('#hidden').toggleClass("none");
	});
	$("#close").click(function(){
		$("#hidden").slideToggle("slow")	
	});
	$("#icon_click").click(function(){
			$("#hidden").slideToggle("slow")
	});	
	
	$('#span_click').click(function(){
		$(".hide").slideToggle("slow")
		$('#shut_up').css("display","block")
		$('#span_click').css("display","none")
	});
	$('#shut_up').click(function(){
		$('.hide').slideToggle("slow")
		$('#shut_up').css("display","none")
		$('#span_click').css("display","block")
	});	
	$('#star_click').click(function(){
		$('.star_hide').slideToggle("slow")
		$('#star_click').css("display","none")
		$('#shut_star').css("display","block")		
	});
	$('#shut_star').click(function(){
		$('.star_hide').slideToggle("slow")
		$('#star_click').css("display","block")
		$('#shut_star').css("display","none")
	});
	$('#hiding_click').click(function(){
		$('.hiding').slideToggle("slow")
		$('#shut_work').css("display","block")
		$('#hiding_click').css("display","none")
	});
	
	$('#shut_work').click(function(){
		$('.hiding').slideToggle("slow")
		$('#hiding_click').css("display","block")
		$('#shut_work').css("display","none")
	});
});
//$(document).ready(function(){
//	 $(".app").hide();
//	 $(".haha").click(function(){
//	 	if ($(this).next().is(":hidden")){
//	 		$(".app").slideUp();
//	 		$('span').next().is.slideDown();
//	 	} else{
//	 		$('span').next().slideUp();
//	 	}
//	 });
//		
//});