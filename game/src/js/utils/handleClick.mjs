import { clickAmount } from "../match.js";
import { datastore } from "./datastore.mjs";

export let canClick = true;
let matchedAmount = 0;
let card1,
	card2 = undefined;

export const handleClick = (card, clickState) => {
	if (clickState === 1) {
		card1 = card;
	} else {
		card2 = card;
	}

	const event = new CustomEvent("clickState", {
		detail: {
			card1: card1,
			card2: card2,
			clickState: clickState,
		},
	});

	document.dispatchEvent(event);
};

document.addEventListener("clickState", (e) => {
	if (e.detail.clickState === 2) {
		canClick = false;
		setTimeout(() => {
			canClick = true;
		}, 1250);

		const card1 = e.detail.card1;
		const card2 = e.detail.card2;

		if (card1.id !== card2.id) {
			setTimeout(() => {
				card1.classList.toggle("flipped");
				card2.classList.toggle("flipped");
				card1.setAttribute("flipped", false);
				card2.setAttribute("flipped", false);
			}, 1000);
		} else {
			datastore.increment("totalCardsMatched");
			matchedAmount++;
			if (matchedAmount === 8) {
				datastore.increment("gamesWon");
				if (clickAmount === 16) datastore.increment("perfectGamesWon");
				if (clickAmount < datastore.get("bestScore") || datastore.get("bestScore") === 0)
					datastore.set("bestScore", clickAmount);
				if (clickAmount > datastore.get("worstScore")) datastore.set("worstScore", clickAmount);
			}
		}
	}
});
