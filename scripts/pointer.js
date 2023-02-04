/** @format */

//Mouse Circle follows pointer
jQuery(document).ready(function () {
	let mouseX = 0,
		mouseY = 0;
	let x = 0,
		y = 0;

	$(document).mousemove(function (e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	});

	setInterval(function () {
		x += (mouseX - x) / 6;
		y += (mouseY - y) / 6;
		$(".mouse-dot").css({ left: x + "px", top: y + "px", opacity: 1 });
		$(".mouse-square").css({ left: x + "px", top: y + "px", opacity: 1 });
	}, 20);
});
//End Mouse Circle follows pointer

//Mouse circle opacity
$(document).ready(function () {
	$(".mouse-square, .mouse-dot").css("opacity", 0.5);
	$(".mouse-square, .mouse-dot")
		.hover(
			function () {
				$(this).animate({ opacity: 0.4 }, 800);
			},
			function () {
				$(this).animate({ opacity: 0.1 }, 800);
			}
		)
		.mouseleave(function () {
			$(".mouse-circle").css("opacity", 0);
		});
});
//End Mouse circle opacity
