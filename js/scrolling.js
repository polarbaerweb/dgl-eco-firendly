document.addEventListener("DOMContentLoaded", function () {
	const button = document.querySelector(".main__info-arrow-box");

	button.addEventListener("click", handleScroll);

	function handleScroll() {
		document.querySelector(".services").scrollIntoView({ behavior: "smooth" });
	}
});
