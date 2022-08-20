$(function () {
	$('.menu-btn').on('click', function () {
		$('.menu__list').toggleClass('active');
	});

	$('.slider').slick({
		arrows: true,
		slidesToShow: 2,
		infinite: false,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1401,
				settings: {
					arrows: false,
				}
			},
			{
				breakpoint: 1301,
				settings: {
					arrows: false,
				}
			},
		]
	});

});

const test = document.getElementById("one");
const test2 = document.getElementById("two");
const test4 = document.getElementById("catalog");
const menu = document.getElementById("menu__toggle");
const mob = document.getElementById("nav__mob");

menu.addEventListener("click", function () {
	if (menu.checked) {
		mob.style.display = "block";
	} else {
		mob.style.display = "none";
	}
});

test.addEventListener("mouseover", () => {
	test2.style.transform = "rotate(90deg)";
	test2.style.transition = ".3s";
	test4.style.textDecorationLine = "underline";
}, false);


test.addEventListener("mouseout", () => {
	test2.style.transform = "rotate(0deg)";
	test2.style.transition = ".3s";
	test4.style.textDecorationLine = "none";
}, false);
