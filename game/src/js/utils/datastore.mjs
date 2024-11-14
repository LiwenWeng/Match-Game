export class Datastore {
	static #statsMap;

	constructor() {
		let data = Datastore.#loadData(localStorage.getItem("stats"));
		if (data === null) {
			data = {};
			data.gamesWon = 0;
			data.perfectGamesWon = 0;
			data.bestScore = 0;
			data.worstScore = 0;
			data.totalCardFlips = 0;
			data.totalCardsMatched = 0;
		}
		Datastore.#statsMap = data;
	}

	get(key) {
		return Datastore.#statsMap[key];
	}

	set(key, value) {
		Datastore.#statsMap[key] = value;
		Datastore.#saveData();
	}

	increment(key) {
		Datastore.#statsMap[key]++;
		Datastore.#saveData();
	}

	useStats(fn) {
		fn(Datastore.#statsMap);
	}

	static #loadData(data) {
		return JSON.parse(data);
	}

	static #saveData() {
		localStorage.setItem("stats", JSON.stringify(Datastore.#statsMap));
	}
}

export const datastore = new Datastore();
