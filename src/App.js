import React from "react";

import WeatherCard from "./WeatherCard";

const App = () => {
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
