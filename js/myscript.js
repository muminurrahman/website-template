$(document).ready(function () {
	$("section, footer").click(function () {
		$(".navbar-collapse").collapse("hide");
	});

	var x = $(".navbar").outerHeight();
	$('#home').css('margin-top', x);
	
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
