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

const renderCard = (place, weather, temp, id) => {
	const card = document.createElement('div');
	card.setAttribute('class', 'card');

	const bg = document.createElement('div');
	bg.setAttribute('class', 'bg-div');
	bg.style.backgroundImage = `url(${getImage(id)})`

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

const getImage = (id) => {
	if (id >= 200 && id <= 299) {
		return img.thunder
	} else if (id >= 300 && id <= 399) {
		return img.drizzle
	} else if (id >= 500 && id <= 599) {
		return img.rain
	} else if (id >= 600 && id <= 699) {
		return img.snow
	} else if (id >= 700 && id <= 799) {
		return img.fog
	} else if (id == 800) {
		return img.clear
	} else if (id >= 801 && id <= 804) {
		return img.clouds
	};
};

const clearElement = () => {
	container.innerHTML = ''
};

const getWeather = (loc) => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=1defcd4c96f2a8a98157d00156e7fe7e`)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			let place = data.name;
			let weather = data.weather[0].main;
			let temp = Math.floor(data.main.temp - 273.15); //celcius
			let id = data.weather[0].id;

			console.log(place, weather, temp, id);
			clearElement();

			renderCard(place, weather, temp, id);
		})
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let loc = search.value;
	getWeather(loc);

	search.value = '';
});
