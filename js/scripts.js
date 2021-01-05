$(document).ready(function () {
	$("footer, main, section").click(function () {
		$(".navbar-collapse").collapse("hide");
	});


	
	$(".carousel").on("wheel", function () {
		direction = event.deltaX / 120;

		if (direction < 0) {
			$(this).carousel("prev");
		} else if (direction > 0) {
			$(this).carousel("next");
		}
	});



	$('img').dblclick(function () {
		window.location = this.src;
	});


	
	var x = $(".navbar").outerHeight();
	
	/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
	var prevScrollpos = window.pageYOffset;
	$(window).scroll(function(){
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos && currentScrollPos > x) {
			$(".navbar").css({ top: '0' });
		} else if (prevScrollpos < currentScrollPos && currentScrollPos > x) {
			$('.navbar').css({top : -x + 'px'});
			$(".navbar-collapse").collapse("hide");
		}
		prevScrollpos = currentScrollPos;
	});
});