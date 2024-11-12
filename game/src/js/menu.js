import { completeCoverTransition, startCoverTransition } from "./utils/coverTransition.mjs";

const playButton = document.getElementById("play");
const helpButton = document.getElementById("help");

const helpPopup = document.getElementById("help-popup");
const confirmPopupButton = document.getElementById("confirm");

completeCoverTransition();

helpButton.onclick = () => {
	helpPopup.classList.remove("close");
	helpPopup.classList.add("open");
};

confirmPopupButton.onclick = () => {
	helpPopup.classList.remove("open");
	helpPopup.classList.add("close");
};

playButton.onclick = () => {
	startCoverTransition("game", true);
};
