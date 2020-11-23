const form = document.getElementById('form');
const search = document.getElementById('search');
const container = document.querySelector('.card-container');

const getWeather = (loc) => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=1defcd4c96f2a8a98157d00156e7fe7e`)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			let place = data.name;
			let weather = data.weather[0].main;
			let temp = Math.floor(data.main.temp - 273.15); //celcius

			console.log(place, weather, temp);
			//Need to extract the wanted info and pass it to the relevant functions to create and
			//display elements
		})
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let loc = search.value;
	getWeather(loc);

	search.value = '';
});
