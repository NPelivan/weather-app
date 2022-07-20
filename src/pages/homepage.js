import React, { useEffect, useState } from "react";
import WeatherCard from "../components/weather";

export default function Homepage() {
	const [lat, setLat] = useState([]);
	const [long, setLong] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			navigator.geolocation.getCurrentPosition(function (postion) {
				setLat(postion.coords.latitude);
				setLong(postion.coords.longitude);
			});

			console.log("Latitute is:", lat);
			console.log("Longitute is:", long);

			await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
			)
				.then((res) => res.json())
				.then((result) => {
					setData(result);
					console.log(result);
				});
		};
		fetchData();
	}, [lat, long]);
	return (
		<div className="App">
			{typeof data.main != "undefined" ? (
				<WeatherCard weatherData={data} />
			) : (
				<div></div>
			)}
		</div>
	);
}
