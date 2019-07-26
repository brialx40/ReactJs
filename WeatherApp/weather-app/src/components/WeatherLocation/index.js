import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
import { api_weather } from '../../constants/api_url';
import Location from "./Location";
import WeatherData from "./WeatherData/index";
import './styles.css';
import { CLOUD } from './../../constants/weathers';


//Definición Class component
class WeatherLocation extends Component {

	//Constructor
	constructor() {
		//Llamado al super constructor
		super();
		//Estado de la clase
		this.state = {
			city: "Cali, CO",
			data: null
		};
		console.log("constructor");
	}

	componentDidMount() {
		console.log("componentDidMount");
		this.handleUpdateClick();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate");
	}

	//Se crea función para el click del button
	handleUpdateClick = () => {
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
		console.log('render')
		const { city, data } = this.state;
		return (
			<div className="weatherLocationCont">
				<Location city={city} />
				{data ?
					<WeatherData data={data} /> :
					<CircularProgress size={50} />
				}
			</div>
		);
	}
}

export default WeatherLocation;