import axios from "axios";
//import { API_KEY } from "../utils/config";

/*export const getWeatherData = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");

	const json = await response.json();

	return json;
};*/

export const getWeatherData = async () => {
	return await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=London&appid=`
	);
};

//https://api.openweathermap.org/data/2.5/weather?q=London&appid=
