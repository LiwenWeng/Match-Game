import { getRandomCard } from "./getRandomCard.mjs";

export const createGameTable = () => {
	const container = document.querySelector(".container");
	const table = container.appendChild(document.createElement("table"));

	for (let j = 0; j < 4; j++) {
		const row = table.appendChild(document.createElement("tr"));
		for (let i = 0; i < 4; i++) {
			const cell = row.appendChild(document.createElement("td"));
			cell.appendChild(getRandomCard());
		}
	}
};
