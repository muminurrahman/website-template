$(document).ready(function () {
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
})