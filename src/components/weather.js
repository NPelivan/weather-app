import React from "react";

const WeatherCard = ({ weatherData }) => (
	<div>
		<h1>{weatherData.name}</h1>
	</div>
);

export default WeatherCard;
