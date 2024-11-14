const cover = document.querySelector(".cover");

export const startCoverTransition = (htmlFile) => {
	cover.style.animation = "firstHalfCoverAnimation 1s forwards";

	cover.addEventListener("animationend", () => {
		const file = htmlFile === "index" ? "../../../index.html" : `/game/public/html/${htmlFile}.html`;
		if (htmlFile === null) completeCoverTransition();
		else window.location.href = file;
	});
};

export const completeCoverTransition = () => {
	cover.style.animation = "secondHalfCoverAnimation 1s forwards";
};
