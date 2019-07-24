import React from "react";
import PropTypes from 'prop-types';
import Location from "./Location";
import WeatherData from "./WeatherData/index";
import './styles.css';

const WeatherLocation = () => (
	<div className="weatherLocationCont">
		<Location city={"Santiago de Cali"}></Location>
		<WeatherData></WeatherData>
	</div>
);

export default WeatherLocation;