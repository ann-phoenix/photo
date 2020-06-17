
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

	var swiper = new Swiper('.swiper2', {
		slidesPerView: 3,
		spaceBetween: 40,
		loop: true,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var swiper = new Swiper('.swiper3', {
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

$(document).ready(function(){
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	});
});

$(".phone").mask("+7 (999) 99-99-999");






