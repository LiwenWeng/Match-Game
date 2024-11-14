import { completeCoverTransition, startCoverTransition } from "./utils/coverTransition.mjs";
import { createGameTable } from "./utils/createGameTable.mjs";
import { datastore } from "./utils/datastore.mjs";
import { canClick, handleClick } from "./utils/handleClick.mjs";

const cards = document.getElementsByClassName("card");
const score = document.querySelector("#score");
const resetButton = document.querySelector("#reset");
const quitButton = document.querySelector("#quit");

export let clickAmount = 0;
let clickState = 0;
const scoreEvent = new CustomEvent("score");

completeCoverTransition();
createGameTable();

Array.from(cards).forEach((card) => {
	const front = card.children[0].children[0];
	const back = card.children[1].children[0];

	card.onclick = () => {
		if (card.getAttribute("flipped") === "true" || !canClick) {
			front.classList.add("shake");
			back.classList.add("shake");
		} else {
			card.setAttribute("flipped", true);
			card.classList.toggle("flipped");

			datastore.increment("totalCardFlips");
			clickAmount++;
			clickState++;
			document.dispatchEvent(scoreEvent);

			handleClick(card, clickState);
			if (clickState === 2) clickState = 0;
		}
	};

	front.addEventListener("animationend", () => {
		front.classList.remove("shake");
	});

	back.addEventListener("animationend", () => {
		back.classList.remove("shake");
	});
});

document.addEventListener("score", () => {
	const isBestScore =
		clickAmount > 15 && (clickAmount < datastore.get("bestScore") || datastore.get("bestScore") === 0);
	const isWorstScore = clickAmount > datastore.get("worstScore") - 1 && datastore.get("worstScore") !== 0;

	score.style.animation = isBestScore
		? "shake 0.3s ease-in-out infinite"
		: isWorstScore
			? "shake 0.6s ease-in-out infinite"
			: "";
	score.style.color = isBestScore ? "red" : isWorstScore ? "cyan" : "white";
	score.style.backgroundColor = isBestScore || isWorstScore ? "black" : "rgba(255, 109, 250, 0.466)";

	score.innerHTML = `Score: ${clickAmount}`;
	score.classList.add("shake");
});

score.addEventListener("animationend", () => {
	score.classList.remove("shake");
});

resetButton.onclick = () => startCoverTransition("game");
quitButton.onclick = () => startCoverTransition("menu");
