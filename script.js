const mainContainer = document.querySelector(".main-container");

let NumberOfGrids = 50;

const createDivs = () => {
	for (let j = 0; j < NumberOfGrids; j++) {
		let createColDiv = document.createElement('div');
		createColDiv.className = "column-div";
		for (let i = 0; i < NumberOfGrids; i++) {
			// console.log(i);
			let createSquareDiv = document.createElement("div");
			createSquareDiv.className = "square-div";
			createSquareDiv.onmouseover = function () {
				createSquareDiv.style.backgroundColor = 'red';
			}
			createColDiv.appendChild(createSquareDiv);
		}
		mainContainer.appendChild(createColDiv);
	};
};
createDivs();
