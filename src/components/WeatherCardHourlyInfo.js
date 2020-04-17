import React from "react";

const thursHourlyInfo = [
	{
		time: "02:00",
		temperature: "11.9",
		windSpeed: "2.42",
		clouds: "100%",
		pressure: "1012",
		description: "overcast clouds",
	},
	{
		time: "05:00",
		temperature: "11.7",
		windSpeed: "1.81",
		clouds: "99%",
		pressure: "1012",
		description: "overcast clouds",
	},
	{
		time: "08:00",
		temperature: "12",
		windSpeed: "1.81",
		clouds: "92%",
		pressure: "1013",
		description: "overcast clouds",
	},
	{
		time: "11:00",
		temperature: "14",
		windSpeed: "3.53",
		clouds: "93%",
		pressure: "1013",
		description: "overcast clouds",
	},
];

const WeatherCardHourlyInfo = () =>
	thursHourlyInfo.map((entry, index) => (
		<div key={index} className="flex">
			{entry.time}
		</div>
	));

export default WeatherCardHourlyInfo;
