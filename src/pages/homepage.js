import React, { useEffect, useState } from "react";
import Weather from "../components/weather";
import SearchBar from "../components/searchBar";

export default function Homepage() {
	const [lat, setLat] = useState(null);
	const [long, setLong] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			navigator.geolocation.getCurrentPosition(function (position) {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			});
		};
		fetchData();
	}, []);

	useEffect(() => {
		if (lat !== null && long !== null) {
			fetchWeatherData();
		}
	}, [lat, long]);

	const fetchWeatherData = async () => {
		await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
		)
			.then((res) => res.json())
			.then((result) => {
				setData(result);
				console.log(result);
			})
			.catch((error) => {
				console.error("Error fetching weather data:", error);
			});
	};

	return (
		<div className="App">
			<h1>Current weather</h1>
			{data ? (
				<div>
					<SearchBar weatherData={data} />
					<Weather weatherData={data} />
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}