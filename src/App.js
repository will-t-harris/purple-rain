import React, { useState, useEffect } from "react";

import * as moment from "moment";

import WeatherCard from "./components/WeatherCard";

const App = () => {
	const [hasError, setHasErrors] = useState(false);
	const [weather, setWeather] = useState({});

	useEffect(() => {
		//TODO ALLOW USER TO PROVIDE LAT/LONG FOR QUERY
		const fetchData = async () => {
			const res = await fetch(
				`https://api.openweathermap.org/data/2.5/onecall?lat=37.773972&lon=-122.431297&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
			);
			res
				.json()
				.then((res) => setWeather(res))
				.catch((err) => setHasErrors(err));
		};

		fetchData();
	}, []);

	return (
		<div className="flex justify-center">
			<WeatherCard day="Thurs" icon="sun" tempFarenheit={78} tempCelcius={67} />
			<WeatherCard day="Fri" icon="rain" tempFarenheit={83} tempCelcius={72} />
			<WeatherCard day="Sat" icon="cloud" tempFarenheit={77} tempCelcius={66} />
			<WeatherCard day="Sun" icon="rain" tempFarenheit={78} tempCelcius={67} />
			<WeatherCard day="Mon" icon="rain" tempFarenheit={71} tempCelcius={69} />
		</div>
	);
};

export default App;
