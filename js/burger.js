document.addEventListener("DOMContentLoaded", handleDomeLoaded);

function handleDomeLoaded() {
	const burger = new Burger(
		(classnames = [".header__navigation", ".burger", "body"]),
		(blocks_name = [".header__links"]),
	);

	burger.handleActivation();
}

class Burger {
	constructor(classnames, blocks_name = []) {
		this.classnames = classnames;
		this.blocks_name = blocks_name;
		this.elements = [];
	}

	handleActivation() {
		const burger = document.querySelector(".burger");
		burger.onclick = () => this._activateElements();
	}

	_activateElements() {
		if (this.elements.length === 0) {
			this._getAllElements();
		}

		this.elements.forEach((element) => {
			element.classList.toggle("active");
		});
	}

	_getAllElements() {
		this.classnames.forEach((classname) => {
			let element = document.querySelector(classname);
			this.elements.push(element);
		});
	}
}
