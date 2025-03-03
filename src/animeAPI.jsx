const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b744adc9fdmshd57b346f6cb2e69p14f7c4jsn4a622c1a676e',
		'x-rapidapi-host': 'anime-db.p.rapidapi.com'
	}
};

export const fetchAnimeData = async () => {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result.data;
	} catch (error) {
		console.error(error);
		return [];
	}
};






