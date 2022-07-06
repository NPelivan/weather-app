import React, { useState, useEffect } from "react";

import { getWeatherData } from "../api/api";

// The REST API endpoint

const Homepage = () => {
	// At the beginning, posts is an empty array
	const [weatherData, setWeatherData] = useState([]);

	// Define the function that fetches the data from API
	const fetchData = async () => {
		const { data } = await getWeatherData();
		setWeatherData(data);
		console.log(data);
	};

	// Trigger the fetchData after the initial render by using the useEffect hook
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="wrapper">
			{weatherData.length > 0 ? (
				<div className="content">
					{weatherData.map((data) => (
						<div className="post">
							<h2>{data.id}</h2>
							<p>{data.body}</p>
						</div>
					))}
				</div>
			) : (
				<p className="loading">Loading... </p>
			)}
		</div>
	);
};

export default Homepage;
