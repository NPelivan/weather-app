import React from "react";
import { API_KEY } from "../utils/config";

export default function Homepage() {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
	)
		.then((response) => response.json())
		.then((json) => console.log(json));

	return <div></div>;
}
