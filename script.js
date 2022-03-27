const mainContainer = document.querySelector(".main-container");

let randomColor = () => {
	let randomNumber = Math.floor(Math.random() * 16777215).toString(16);
	return `#${randomNumber}`;
};

let mouse = 'up';
wholePage = document.querySelector('body');
wholePage.onmousedown = () => {
	mouse = 'down';
}
wholePage.onmouseup = () => {
	mouse = 'up';
}

const createDivs = (NumberOfGrids) => {
	for (let j = 0; j < NumberOfGrids; j++) {
		let createColDiv = document.createElement("div");
		createColDiv.className = "column-div";
		for (let i = 0; i < NumberOfGrids; i++) {
			let createSquareDiv = document.createElement("div");
			createSquareDiv.style.backgroundColor = 'white';
			createSquareDiv.className = "square-div";

			createSquareDiv.onmousedown = function () {
				if (createSquareDiv.style.backgroundColor === 'white') {
					createSquareDiv.style.backgroundColor = randomColor();
				} else if (createSquareDiv.style.filter === 'brightness(0%)') {
					return
				} else if (createSquareDiv.style.filter) {
					let currentBrightness = parseInt(createSquareDiv.style.filter.slice(11,13));
					let newBrightness = `brightness(${currentBrightness - 10}%)`;
					createSquareDiv.style.filter = newBrightness;
				} else {
					createSquareDiv.style.filter = 'brightness(90%)'
				}
			};

			createSquareDiv.onmouseenter = function () {
				if (mouse === 'down') {
					if (createSquareDiv.style.backgroundColor === 'white') {
						createSquareDiv.style.backgroundColor = randomColor();
					} else if (createSquareDiv.style.filter === 'brightness(0%)') {
						return
					} else if (createSquareDiv.style.filter) {
						let currentBrightness = parseInt(createSquareDiv.style.filter.slice(11,13));
						let newBrightness = `brightness(${currentBrightness - 10}%)`;
						createSquareDiv.style.filter = newBrightness;
					} else {
						createSquareDiv.style.filter = 'brightness(90%)'
					}
				} else { return }
			};
			createColDiv.appendChild(createSquareDiv);
		}
		resetButton.textContent = 'Reset'
		mainContainer.appendChild(createColDiv);
	}
};

const resetDrawing = () => {
	let NumberOfGrids = prompt("Please key in grid size");
	while (isNaN(NumberOfGrids) || NumberOfGrids === '' || NumberOfGrids > 100) {
		if (NumberOfGrids === null) {
			return
		}
		NumberOfGrids = prompt("Invalid. Please key in valid number lesser than 100.");
	}
	if (isNaN(parseInt(NumberOfGrids))) {
		return
	} else {
		while (mainContainer.firstChild) {
			mainContainer.removeChild(mainContainer.firstChild);
		}
		createDivs(NumberOfGrids);
	}
};

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", (e) => {
	resetDrawing();
});

// resetDrawing();