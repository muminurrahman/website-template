let x = document.querySelectorAll("img");

for (let i = 0; i < x.length; i++) {
	x[i].addEventListener("dblclick", function () {
		window.location = this.src;
	});
}
