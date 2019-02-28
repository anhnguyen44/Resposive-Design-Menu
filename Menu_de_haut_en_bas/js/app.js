$(document).ready(function(){
	$("a#menu_res_icon").click(function(){
		//$("#menu_res").css('display','block');
		$("#menu_res").slideToggle();//slideUp, slideDown = slideToggle
	});
	$(window).resize(function(){
		//Nếu kích thước màn hình lớn hơn 768px thì res_menu ẩn đi
		if($(document).width()>=768){
			$("#menu_res").css('display','none');
		}
	});
});