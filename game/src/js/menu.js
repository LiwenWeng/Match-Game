const buttons = document.getElementsByClassName("container")[0].children[1].children;

const onClick = (event) => {
	const button = event.target;
	const rect = button.getBoundingClientRect();

	const buttonX = rect.left + rect.width / 2;
	const buttonY = rect.top + rect.height / 2;

	// eslint-disable-next-line no-undef
	confetti({
		particleCount: 75,
		spread: 180,
		startVelocity: 15,
		origin: {
			x: buttonX / window.innerWidth,
			y: buttonY / window.innerHeight,
		},
		colors: ["#ff6f61", "#ff9f91", "#ff4a36"],
	});
};

[...buttons].forEach((button) => {
	button.addEventListener("click", onClick);
});
