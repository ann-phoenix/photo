
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
	var mySwiper = new Swiper('.swiper2', {
    spaceBetween: 1,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
  });
});
