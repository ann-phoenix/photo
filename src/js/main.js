
$(function(){
	var swiper = new Swiper('.swiper1', {
		slidesPerView: 3,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		autoplay: {
			delay: 5500,
			disableOnInteraction: false,
		},
	});

	$(".portfolio__mini").slice(0, 8).show();
$("body").on('click touchstart', '.portfolio__link', function (e) {
		e.preventDefault();
		$(".portfolio__mini:hidden").slice(0, 4).slideDown();
		if ($(".portfolio__mini:hidden").length == 0) {
				$(".portfolio__link").css('visibility', 'hidden');
		}
});
});


	
	
	
	
	
	
	
	
});