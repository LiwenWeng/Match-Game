const playButton = document.getElementById("play");
const helpButton = document.getElementById("help");

const cover = document.querySelector(".cover");

const helpPopup = document.getElementById("help-popup");
const confirmPopupButton = document.getElementById("confirm");

helpButton.onclick = () => {
	helpPopup.classList.remove("close");
	helpPopup.classList.add("open");
};

confirmPopupButton.onclick = () => {
	helpPopup.classList.remove("open");
	helpPopup.classList.add("close");
};

playButton.onclick = () => {
	cover.style.animation = "firstHalfCoverAnimation 1s forwards";

	cover.addEventListener("animationend", () => {
		window.location.href = "../../public/html/game.html";
	});
};
