import React from "react";

import SunIcon from "../icons/SunIcon";
import RainIcon from "../icons/RainIcon";
import CloudIcon from "../icons/CloudIcon";

const WeatherCard = ({ day, icon, tempFarenheit, tempCelcius }) => {
	const setIcon = (icon) => {
		if (icon === "sun") {
			return <SunIcon twClasses="mx-auto my-4 h-12 text-yellow-500" />;
		} else if (icon === "rain") {
			return <RainIcon twClasses="mx-auto my-4 h-12 text-blue-500" />;
		} else if (icon === "cloud") {
			return <CloudIcon twClasses="mx-auto my-4 h-12 text-gray-500" />;
		}
	};
	return (
		<div className="p-4 mt-4 mx-2 border-4 border-gray-400">
			<p className="text-center">{day}</p>
			<div>{setIcon(icon)}</div>
			<div>
				<span className="pr-2 text-gray-800">{tempFarenheit}&deg;</span>
				<span className="text-gray-500">{tempCelcius}&deg;</span>
			</div>
		</div>
	);
};

export default WeatherCard;
