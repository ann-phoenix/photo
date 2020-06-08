
$(function(){
	var swiper = new Swiper('.swiper-container', {
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
});