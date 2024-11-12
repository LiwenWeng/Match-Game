import { completeCoverTransition } from "./utils/coverTransition.mjs";
import { createGameTable } from "./utils/createGameTable.mjs";
import { canClick, handleClick } from "./utils/handleClick.mjs";

const cards = document.getElementsByClassName("card");

let clickAmount = 0;
let clickState = 0;
const scoreEvent = new CustomEvent("score");

completeCoverTransition();
createGameTable();

Array.from(cards).forEach((card) => {
	card.onclick = () => {
		if (card.getAttribute("flipped") === "true") return;
		if (!canClick) return;

		card.setAttribute("flipped", true);
		card.classList.toggle("flipped");

		clickAmount++;
		clickState++;
		document.dispatchEvent(scoreEvent);

		handleClick(card, clickState);
		if (clickState === 2) clickState = 0;
	};
});

document.addEventListener("score", () => {
    
});
