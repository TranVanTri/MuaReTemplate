$(document).ready(function() {
	$(window).resize(function(){
		if($(window).width()<=1200){
		  	$('.content-left').removeClass('col-lg-9 col-md-9');
		  	$('.content-left').addClass('col-lg-12 col-md-12');
		}else {
			$('.content-left').addClass('col-lg-9 col-md-9');
		  	$('.content-left').removeClass('col-lg-12 col-md-12');
		}
	});
});