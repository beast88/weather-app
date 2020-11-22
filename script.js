let loc = 'cwmbran'

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=1defcd4c96f2a8a98157d00156e7fe7e`)
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})