import React from "react";

export default function Weather({ weatherData }) {
	const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
	return (
		<div>
			<h2>{weatherData.name}</h2>
			<h3>Country: {weatherData.sys.country}</h3>
			<img src={iconUrl} alt={weatherData.weather[0].description} />
			<p>Tempererature: {Math.round(weatherData.main.temp)} &deg;C</p>
			<p>Feels like: {Math.round(weatherData.main.feels_like)} &deg;C</p>
			<p>Max temperature: {Math.round(weatherData.main.temp_max)} &deg;C</p>
			<p>Min temperature: {Math.round(weatherData.main.temp_min)} &deg;C</p>
			<p>Pressure: {weatherData.main.pressure} hPa</p>
			<p>Humidity: {weatherData.main.humidity} %</p>
			<p>Visibility: {weatherData.visibility} m</p>
			<p>Windspeed: {weatherData.wind.speed} m/s</p>
			<p>Description: {weatherData.weather[0].description}</p>
			<p>
				Sunrise:{" "}
				{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
			</p>
			<p>
				Sunset:{" "}
				{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
			</p>
		</div>
	);
}
