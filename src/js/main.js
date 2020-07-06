
$(function(){
	var swiper = new Swiper('.swiper1', {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		autoplay: {
			delay: 5500,
			disableOnInteraction: false,
		},
		breakpoints: {
			1210: {
				slidesPerView: 3,
				spaceBetween: 10,
			},

			825: {
				slidesPerView: 2,

			},
			550: {
				slidesPerView: 1,
				spaceBetween: 10,
			},

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
		breakpoints: {
			1010: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			450: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
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

$('.header__burger').on('click', function(){
	$('.header__menu-list').slideToggle();
 });
// 

$('.header__burger').click(function(event){
	$('.header__burger').toggleClass('active');
});




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("reviews__item");
  var dots = document.getElementsByClassName("reviews__item-dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var myLazyLoad = new LazyLoad({
	elements_selector: '.lazyload',
	threshold: 300
});
