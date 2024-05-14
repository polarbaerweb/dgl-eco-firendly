const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	keyboard: {
		enabled: true,
		pageUpDown: true,
	},

	autoplay: true,

	watchOverflow: true,
});
