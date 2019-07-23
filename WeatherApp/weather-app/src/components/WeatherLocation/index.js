import React from "react";
import PropTypes from 'prop-types';
import Location from "./Location";
import WeatherData from "./WeatherData/index";

const WeatherLocation = () => (
	<div>
		<Location city={"Santiago de Cali"}></Location>
		<WeatherData></WeatherData>
	</div>
);

export default WeatherLocation;