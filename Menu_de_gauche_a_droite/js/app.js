$(document).ready(function(){
	$("a#menu_res_icon").click(function(){
		//$("#menu_res").css('display','block');
		//$("#menu_res").slideToggle();//slideUp, slideDown = slideToggle
		$("#site").toggleClass("open_menu_res");
		// $("a#menu_res_icon i").toggleClass(function(){
		// 	return $(this).is('.fas fa-align-justify, .fas fa-times')?'fas fa-align-justify':'fas fa-times';
		// });
		$("a#menu_res_icon i").toggleClass('fa-align-justify fa-times');
	});
	$(window).resize(function(){
		//Nếu kích thước màn hình lớn hơn 768px thì res_menu ẩn đi
		if($(document).width()>=768){
			$("#site").removeClass("open_menu_res");
			$("a#menu_res_icon i").removeClass('fa-times').addClass('fa-align-justify');
		}
	});
});