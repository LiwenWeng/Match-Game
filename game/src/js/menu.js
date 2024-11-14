import { completeCoverTransition, startCoverTransition } from "./utils/coverTransition.mjs";

const playButton = document.getElementById("play");
const helpButton = document.getElementById("help");
const statsButton = document.getElementById("stats");

const statsPopup = document.getElementById("stats-popup");
const statsConfirmButton = document.getElementById("stats-confirm");

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
