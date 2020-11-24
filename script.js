const form = document.getElementById('form');
const search = document.getElementById('search');
const container = document.querySelector('.card-container');
const img = {
	clear: 'Images/clear.jpg',
	clouds: 'Images/clouds.jpg',
	drizzle: 'Images/drizzle.jpg',
	fog: 'Images/fog.jpg',
	rain: 'Images/rain.jpg',
	snow: 'Images/snow.jpg',
	thunder: 'Images/thunder.jpg'
}

const renderCard = (place, weather, temp) => {
	const card = document.createElement('div');
	card.setAttribute('class', 'card');

	const bg = document.createElement('div');
	bg.setAttribute('class', 'bg-div');
	//Need a way to set the image depending on the weather
	//Need to change the style of the bg image in js

	const info = document.createElement('div');
	info.setAttribute('class', 'info');

	const name = document.createElement('h2');
	name.setAttribute('class', 'name');
	name.innerText = place;

	const atmo = document.createElement('h3');
	atmo.setAttribute('class', 'atmo');
	atmo.innerText = weather;

	const heat = document.createElement('h1');
	heat.setAttribute('class', 'heat');
	heat.innerText = `${temp}\xB0C`

	info.append(name, heat, atmo);

	card.append(bg, info);

	container.append(card);
};

const clearElement = () => {
	container.innerHTML = ''
}

const getWeather = (loc) => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=1defcd4c96f2a8a98157d00156e7fe7e`)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			let place = data.name;
			let weather = data.weather[0].main;
			let temp = Math.floor(data.main.temp - 273.15); //celcius

			console.log(place, weather, temp);
			clearElement();

			renderCard(place, weather, temp);
		})
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let loc = search.value;
	getWeather(loc);

	search.value = '';
});
