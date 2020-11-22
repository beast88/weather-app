const form = document.getElementById('form');
const search = document.getElementById('search');

const getWeather = (loc) => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=1defcd4c96f2a8a98157d00156e7fe7e`)
		.then(response => response.json())
		.then(data => {
			console.log(data)
		})
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let loc = search.value
	getWeather(loc);

	search.value = '';
})
