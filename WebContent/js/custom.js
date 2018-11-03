
$(document).ready(function () {
	"use strict";
	// PRE LOADER
	$(window).load(function () {
		$('.preloader').fadeOut(3000); // set duration in brackets    
	});
	var topMenuHeight = 50;
	$('ul.nav a[href*=#]').on('click', function (e) {
		//e.preventDefault();
		var aid = $(this).data("sect");
		if($(aid).length > 0) {
		    $('html, body').animate({
		    	scrollTop: $(aid).offset().top - topMenuHeight
		    }, 500, 'linear');
		}
	});
	$(window).scroll(function () {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
	
	// HOME SLIDER & COURSES & CLIENTS
	$('.home-slider').owlCarousel({
		animateOut : 'fadeOut',
		items : 1,
		loop : true,
		dots : true,
		autoplayHoverPause : false,
		autoplay : true,
		smartSpeed : 1000,
	})

	$('.owl-courses').owlCarousel(
			{
				animateOut : 'fadeOut',
				loop : true,
				autoplayHoverPause : false,
				autoplay : true,
				smartSpeed : 1000,
				dots : false,
				nav : true,
				navText : [ '<i class="fa fa-angle-left"></i>',
						'<i class="fa fa-angle-right"></i>' ],
				responsiveClass : true,
				responsive : {
					0 : {
						items : 1,
					},
					1000 : {
						items : 3,
					}
				}
			});

	$('.owl-client').owlCarousel({
		animateOut : 'fadeOut',
		loop : true,
		autoplayHoverPause : false,
		autoplay : true,
		smartSpeed : 1000,
		responsiveClass : true,
		responsive : {
			0 : {
				items : 1,
			},
			1000 : {
				items : 3,
			}
		}
	});

	$("#divReg").hide();
	$("#hlToReg").click(function (e) {
		e.preventDefault();
		$("#divReg").show();
		$("#divLogin").hide();
	});
	$("#hlToLogin").click(function (e) {
		e.preventDefault();
		$("#divReg").hide();
		$("#divLogin").show();
	});

	$("#divResp").click(function (e) {
		e.preventDefault();
		alert("OK");
	});
	
	$('#go-top .go').on('click',function(){
		$('html,body').animate({'scrollTop':0},500);
	});

	$('#go-top .uc-2vm').hover(function(){
		$('#go-top .uc-2vm-pop').removeClass('dn');
		
		
	},function(){
		$('#go-top .uc-2vm-pop').addClass('dn');
		
	});

	$('#go-top .tel2').hover(function(){
		$('#go-top .uc-tel').removeClass('dn');
		
		
	},function(){
		$('#go-top .uc-tel').addClass('dn');
		
	});
	
	$('.weixin').hover(function(){
		$('#weixin-top .uc-2vm-pop').removeClass('dn');
		$('#weixin-top').removeClass('dn');
	},function(){
		$('#weixin-top .uc-2vm-pop').addClass('dn');
		$('#weixin-top').addClass('dn');
	});
	
	/* isotope
  	------------------------------*/
  	if ( $('.iso-box-wrapper').length > 0 ) { 

	    var $container 	= $('.iso-box-wrapper'), 
	    	$imgs 		= $('.iso-box img');

	    $container.imagesLoaded(function () {

	    	$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: '.iso-box'
	    	});

	    	$imgs.load(function(){
	    		$container.isotope('reLayout');
	    	})

	    });

	    //filter items on button click
	    $('.filter-wrapper li a').click(function(){

	        var $this = $(this), filterValue = $this.attr('data-filter');

			$container.isotope({ 
				filter: filterValue,
				animationOptions: { 
				    duration: 750, 
				    easing: 'linear', 
				    queue: false, 
				}              	 
			});	            

			// don't proceed if already selected 
			if ( $this.hasClass('selected') ) { 
				return false; 
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

	      return false;
	    }); 
	}

	/* wow
	-------------------------------*/
	new WOW().init();
});
