const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};

const numbers = Array.from({ length: 2 }, () => [1, 2, 3, 4, 5, 6, 7, 8]).flat();
shuffle(numbers);

export const getRandomCard = () => {
	const card = `card${numbers.pop()}`;

	const cardElement = document.createElement("div");
	cardElement.setAttribute("flipped", false);
	cardElement.classList.add("card");
	cardElement.id = card;

	const front = cardElement.appendChild(document.createElement("div"));
	front.classList.add("front");
	const image = front.appendChild(document.createElement("img"));
	image.src = `../../public/assets/ui/match/cards/${card}.png`;

	const back = cardElement.appendChild(document.createElement("div"));
	back.classList.add("back");
	const cardBack = back.appendChild(document.createElement("img"));
	cardBack.src = "../../public/assets/ui/match/card_back.png";

	return cardElement;
};
