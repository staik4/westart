$(document).ready(function(){
	// var syntheticEvent = new WheelEvent("syntheticWheel", {"deltaY": 4, "deltaMode": 0});

	$("a[href^='#']").click(function(){
		let top = $(this).attr('href');
        $('html, body').stop().animate({scrollTop: $(top).offset().top}, 1000);
				// console.log('kus');
	});

	$('#join-us').on('click', function(){
		let top = $('#form');
		$('html, body').stop().animate({scrollTop: $(top).offset().top}, 1000);
	});

	$('#presentation').on('click', function(){
		document.location.href = '../westart/presentation/WS_ENG.pdf';
	});

	$('#tel').inputmask("+9(999)-999-9999");

	$("nav ul li").each(function(){
		$(this).click(function(){
			$("nav ul").children().removeClass("active-nav");
			$(this).addClass("active-nav");
		});
	});
	setTimeout(function(){
		console.log("kuku");
		$(".content-layout").css({"width":"100%"});

	},500);

	var touch = $('.burger');
	var menu = $("nav ul");
	// console.log(touch, menu);
	$(touch).on('click', function(e){
		e.preventDefault();
		$('nav').css({"margin-top":"70px"});
		menu.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if (wid > 960){
		    menu.removeAttr('style');
		    $('nav').removeAttr('style');
		}
	});

	$(".title-gl").each(function(){
		let heightWindow = $(window).height();
		$(this).on('click', function(){
			$(this).parent().children().removeClass('active-gl');
			$(this).addClass('active-gl');
			console.log($(this).data('choice'));
			if($(this).data('choice') == 0){
				$('.wrapper').animate({'margin-top': -heightWindow*$(this).data('choice')}, 1500);
			}else if($(this).data('choice') == 1) {
				$('.wrapper').animate({'margin-top': -heightWindow*$(this).data('choice')}, 1500);
			} else if($(this).data('choice') == 2){
					$('.wrapper').animate({'margin-top': -heightWindow*$(this).data('choice')}, 1500);
			}
		});
	});
	window.onscroll = function() {
		let scrolled = window.pageYOffset;
		console.log(scrolled);
		if(scrolled > 90) {
			$(".public-venture").addClass('movePublick');
			$(".anim_").addClass('movePublickPicture');
			setTimeout(function(){
				$(".public-venture").css({"opacity":"1"})
			},2000)
		}
	}
	// 	if (scrolled > 1300 && scrolled < 1800){
	// 		let top = $("#glob-mark");
	// 		$('html, body').stop().animate({scrollTop: $(top).offset().top});
	// 		$(".global-marketing").mouseover(function(){
	// 			let is_scrolling = false;
	// 			$(this).on('mousewheel', function(e) {
	// 				e.preventDefault();
	// 				console.log(event.deltaY);
	//
	// 			});
	// 		});
	//
	// 	}
	// }



	setTimeout(function(){
		$(".banner").css({"opacity":"1"});

	},3000);

	setTimeout(function() {
		let heightWindow = $(window).height();
		$("#glob-mark").css({"height":heightWindow});
		// console.log(heightWindow);
		let wrapperWidth = $(".visible-part").height()*3;
		$(".wrapper").css({"height": wrapperWidth});
		// let ulWidth = wrapperWidth/3;
		let hhh = $(".titles-gls").height();
		$(".ul-width").css({"height": heightWindow});
		$(".ul-width ul").css({"height": hhh});
		$(".list-img").css({"height":heightWindow});
		$(".img-circ").css({"height":heightWindow});
		$(".img-part").css({"height":hhh});
		//$(".titles-gls").css({"height":ulWidth})
	}, 500);















});
