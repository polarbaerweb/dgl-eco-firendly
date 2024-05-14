function imagesInit() {
	const images = document.querySelectorAll(".main__project-magnify");

	if (images.length) {
		images.forEach((image) => {
			const imageItem = image.querySelector("img");
			const padding = (imageItem.offsetHeight / imageItem.offsetWidth) * 80;

			image.style.paddingBottom = `${padding}%`;
			imageItem.classList.add("init");
		});
	}
}

function gridInit() {
	const container = document.querySelector(".main__projects");
	const grid = new Isotope(container, {
		itemsSelector: ".main__project-item",
		percentPosition: true,
		masonry: {
			fitWidth: true,
			gutter: 30,
		},
	});

	document.addEventListener("click", documentAction);

	function documentAction(event) {
		const targetElement = event.target;

		if (targetElement.closest(".main__filter-button")) {
			const filterItem = targetElement.closest(".main__filter-button");
			const filterValue = filterItem.dataset.filter;
			const filterActiveItem = document.querySelector(
				".main__filter-button.active",
			);

			filterValue === "*"
				? grid.arrange({ filter: "" })
				: grid.arrange({ filter: `[data-filter=${filterValue}]` });

			filterActiveItem.classList.remove("active");
			filterItem.classList.add("active");

			event.preventDefault();
		}
	}
}

document.addEventListener("DOMContentLoaded", windowLoad);

function windowLoad() {
	imagesInit();
	gridInit();
}
