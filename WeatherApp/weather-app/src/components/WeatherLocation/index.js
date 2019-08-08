import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from "../../services/getUrlWeather";
import transformWeather from './../../services/transformWeather';
import Location from "./Location";
import WeatherData from "./WeatherData/index";
import './styles.css';


//Definición Class component
class WeatherLocation extends Component {

	//Constructor
	constructor(props) {
		//Llamado al super constructor
		super(props);
		//Estado de la clase
		this.state = {
			city: props.city,
			data: null
		};
	}

	componentDidMount() {
		this.handleUpdateClick();
	}

	componentDidUpdate(prevProps, prevState) {

	}

	//Se crea función para el click del button
	handleUpdateClick = () => {
		//obtiene la url para la petición
		const api_weather = getUrlWeatherByCity(this.state.city);
		//Se buscan los datos
		fetch(api_weather).then(resolve => {
			return resolve.json();
		}).then(data => {
			const newWeather = transformWeather(data);
			//Se actualizaon los datos al state
			this.setState({
				data: newWeather
			});
		});
	}
	//Método que renderiza la clase
	render() {
		const { onWeatherLocationClick } = this.props;
		const { city, data } = this.state;
		return (
			<div className="weatherLocationCont" onClick={onWeatherLocationClick}>
				<Location city={city} />
				{data ?
					<WeatherData data={data} /> :
					<CircularProgress size={50} />
				}
			</div>
		);
	}
}

//Define los propTypes
WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;