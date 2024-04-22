// accessing the weather container div
const weatherContainer = document.getElementById('weather-container');

//looping over the weather json and adding data to the page
weatherData.cities.forEach(city => {
    //creating div element for each city
const cityDiv  = document.createElement('div');
cityDiv.classList.add('weather-card');


//adding city names
const cityName = document.createElement('div');
cityName.classList.add('city-name');
cityName.textContent = city.name;

//adding weather info
const weatherInfo = document.createElement('div');
weatherInfo.classList.add('weather-info');
weatherInfo.textContent = `Temperature: ${city.temperature}, Chance Of Rain: ${city.chance_of_rain_of_rain}`;

//appending city name and weather info to city div
cityDiv.appendChild(cityName);
cityDiv.appendChild(weatherInfo);

//appending city div to weather container
weatherContainer.appendChild(cityDiv);
});