$(document).ready(function () {
	$(".carousel").on("wheel", function() {
		direction = event.deltaX / 120;
	  
		if (direction < 0) {
			$(this).carousel("next");
		} else if (direction > 0) {
			$(this).carousel("prev");
		}
		
		direction = 0;
	});
});
