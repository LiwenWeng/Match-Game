import { completeCoverTransition, startCoverTransition } from "./utils/coverTransition.mjs";
import { datastore } from "./utils/datastore.mjs";

const playButton = document.getElementById("play");
const helpButton = document.getElementById("help");
const statsButton = document.getElementById("stats");

const statsPopup = document.getElementById("stats-popup");
const statsConfirmButton = document.getElementById("stats-confirm");
const statsContent = Array.from(document.getElementById("stats-content").children);
const gamesWon = statsContent[0];
const perfectGamesWon = statsContent[1];
const bestScore = statsContent[2];
const worstScore = statsContent[3];
const totalCardFlips = statsContent[4];
const totalCardsMatched = statsContent[5];

const helpPopup = document.getElementById("help-popup");
const helpConfirmButton = document.getElementById("help-confirm");

completeCoverTransition();

helpButton.onclick = () => {
	helpPopup.classList.remove("close");
	helpPopup.classList.add("open");
};

helpConfirmButton.onclick = () => {
	helpPopup.classList.remove("open");
	helpPopup.classList.add("close");
};

statsButton.onclick = () => {
	statsPopup.classList.remove("close");
	statsPopup.classList.add("open");
};

statsConfirmButton.onclick = () => {
	statsPopup.classList.remove("open");
	statsPopup.classList.add("close");
};

playButton.onclick = () => {
	startCoverTransition("game", true);
};

datastore.useStats((stats) => {
	gamesWon.innerHTML = `Games won: ${stats.gamesWon}`;
	perfectGamesWon.innerHTML = `Perfect games won: ${stats.perfectGamesWon}`;
	bestScore.innerHTML = `Best score: ${stats.bestScore}`;
	worstScore.innerHTML = `Worst score: ${stats.worstScore}`;
	totalCardFlips.innerHTML = `Total card flips: ${stats.totalCardFlips}`;
	totalCardsMatched.innerHTML = `Total cards matched: ${stats.totalCardsMatched}`;
});
