import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import trasnformForecast from './../services/transformForeCast';

import './styles.css';


//array de días
const days = [
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes'
];

const data = {
	temperature: 10,
	humidity: 10,
	weatherState: 'normal',
	wind: 'normal'
};

export const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
export const url_ = "http://api.openweathermap.org/data/2.5/forecast";


//Se define Component
class ForecastExtended extends Component {

	constructor() {
		super();
		this.state = { forecastData: null };
	}

	componentDidMount() {
		this.updateCity(this.props.city);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.city !== this.props.city) {
			this.setState({ forecastData: null });
			this.updateCity(nextProps.city);
		}
	}

	updateCity = city => {
		const url_forecast = `${url_}?q=${city}&appid=${api_key}`;
		fetch(url_forecast)
			.then(
				data => (data.json())
			).then(
				weather_data => {
					const forecastData = trasnformForecast(weather_data);
					this.setState({ forecastData });
				}
			);
	}

	renderForecastItemDays(forecastData) {
		return forecastData.map(forecast => (
			<ForecastItem
				key={`${forecast.weekDay}-${forecast.hour}`}
				weekDay={forecast.weekDay}
				hour={forecast.hour}
				data={forecast.data}></ForecastItem>)
		);
	}

	renderProgress = () => {
		return "Cargando...";
	}

	render() {
		const { city } = this.props;
		const { forecastData } = this.state;
		return (
			<div>
				<h1 className="forecast-title">Pronostico extendido para {city}</h1>
				{
					forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()
				}
			</div>);
	}
}

ForecastExtended.propTypes = {
	city: PropTypes.string.isRequired,
}

export default ForecastExtended;