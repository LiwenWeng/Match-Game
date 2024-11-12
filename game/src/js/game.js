import { completeCoverTransition, startCoverTransition } from "./utils/coverTransition.mjs";
import { createGameTable } from "./utils/createGameTable.mjs";
import { canClick, handleClick } from "./utils/handleClick.mjs";

const cards = document.getElementsByClassName("card");
const score = document.querySelector("#score");
const resetButton = document.querySelector("#reset");
const quitButton = document.querySelector("#quit");

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
	score.innerHTML = `Score: ${clickAmount}`;
	score.classList.add("shake");
});

score.addEventListener("animationend", () => {
	score.classList.remove("shake");
});

resetButton.onclick = () => startCoverTransition("game");
quitButton.onclick = () => startCoverTransition("menu");
