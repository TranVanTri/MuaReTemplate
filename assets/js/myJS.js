$(document).ready(function() {

	// Responnse giao dien trang chu
	$(window).resize(function(){
		if($(window).width()<=1200){
		  	$('.content-left').removeClass('col-lg-9 col-md-9');
		  	$('.content-left').addClass('col-lg-12 col-md-12');
		}else {
			$('.content-left').addClass('col-lg-9 col-md-9');
		  	$('.content-left').removeClass('col-lg-12 col-md-12');
		}
	});
	// owl-carousel sản phẩm độc đáo
	$('.promoteProduct.row.owl-carousel').owlCarousel({
		loop:true,
		autoplayHoverPause:true,
		autoplay:true,
		autoplayTimeout:3000,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
				nav:true,
				loop:true,
				
			},
			600:{
				items:3,
				nav:true,
				loop:true
			},
			1000:{
				items:4,
				nav:true,
				loop:true,
			}
		}
	});

	//khi load trang login, hide muc đăng ký đi
	$(document).ready(function() {
    	$("#dangkysection").hide();
    	$(".email-login").hide();
    	$(".phone-number-login").hide();
	});

	$("#buttonDangKy").click(function() {
	  $("#dangnhapsection").hide();
	  $("#dangkysection").show();
	  $("#buttonDangKy").hide();
	  $(".radioTypeLogin").hide();
	});

	$('input[type=radio][name=typelogin]').on('change', function(){
	    switch($(this).val()){
	        case '1' :
	            $(".phone-number-login").hide();
	            $(".email-login").hide();
	            $(".username-login").show();
	            break;
	        case '2' :
	            $(".username-login").hide();
	            $(".email-login").hide();
	            $(".phone-number-login").show();
	            break;
            case '3' :
	            $(".phone-number-login").hide();
	            $(".username-login").hide();
	            $(".email-login").show();
	            break;
	    }            
	});
	                          
	   
    
});
	