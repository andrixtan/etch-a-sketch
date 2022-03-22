const mainContainer = document.querySelector(".main-container");

let NumberOfGrids = 20;

const createDivs = () => {
	for (let j = 0; j < NumberOfGrids; j++) {
		let createColDiv = document.createElement('div');
		createColDiv.className = "column-div";
		for (let i = 0; i < NumberOfGrids; i++) {
			// console.log(i);
			let createSquareDiv = document.createElement("div");
			createSquareDiv.className = "square-div";
			createColDiv.appendChild(createSquareDiv);
		}
		mainContainer.appendChild(createColDiv);
	};
};
createDivs();
