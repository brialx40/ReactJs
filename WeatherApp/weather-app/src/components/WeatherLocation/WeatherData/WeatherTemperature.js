import React from "react";
import WeatherIcons from 'react-weathericons';
import { PropTypes } from 'prop-types';
import {
	SUN,
	CLOUD,
	RAIN,
	SNOW,
	THUNDER,
	DRIZZLE
} from '../../../constants/weathers';
import './styles.css';

//Icons
const icons = {
	[CLOUD]: 'cloud',
	[SUN]: "day-sunny",
	[RAIN]: 'rain',
	[SNOW]: 'snow',
	[THUNDER]: 'day-thunderstorm',
	[DRIZZLE]: 'day-showers'
};

//Método que retorna el icono a mostrar según el estado del clima
const getWeatherIcon = weatherState => {
	let icon = icons[weatherState];
	const iconSize = "4x";
	//Si no ecuentra icono
	if (!icon) {
		icon = "day-sunny";
	}
	return <WeatherIcons className="wicon" name={icon} size={iconSize} />;
};

//Definición del componente WeatherTemperature
const WeatherTemperature = ({ temperature, weatherState }) => (
	<div className="weatherTemperatureCont">
		{
			getWeatherIcon(weatherState)
		}
		<span className="temperature">{`${temperature}`}</span>
		<span className="temperatureType">{` C°`}</span>
	</div>
);

//Se fine propiedades al componente
WeatherTemperature.protoTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;