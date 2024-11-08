const helpButton = document.getElementById("help");

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
