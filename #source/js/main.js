$(document).ready(function () {

	// Main Production sliders
	if ($('.promo__slick').length > 0) {
			$('.promo__slick').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 10000,
					speed: 1000,
					swipeToSlide: true,
			});
	}
	

	$("[data-tab]").on("click", function(e){
			e.preventDefault();
			$(".promo__video-box").removeClass('active').html('');
			$(this).addClass('active');
			var tab = $(this).data('tab');
			var video = $('[data-tab-box="'+tab+'"]').data('video');
			$('[data-tab-box="'+tab+'"]').html(' <iframe src="https://www.youtube.com/embed/'+video+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			$('[data-tab-box="'+tab+'"]').toggleClass('active');
			
			if (window.innerWidth < 1024) {
					var destination = $(".promo__video").offset().top - 80;
					jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
			}
	});

});