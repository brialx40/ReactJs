import React, { Component } from "react";
import PropTypes from 'prop-types';
import Location from "./Location";
import WeatherData from "./WeatherData/index";
import './styles.css';
import {
	CLOUD,
	SUN
} from '../../constants/weathers';

const data1 = {
	temperature: 10,
	weatherState: CLOUD,
	humidity: 8,
	wind: '10 m/s'
};

const data2 = {
	temperature: 29,
	weatherState: SUN,
	humidity: 12,
	wind: '15 m/s'
};

//Definición Class component
class WeatherLocation extends Component {

	//Constructor
	constructor() {
		//Llamado al super constructor
		super();
		//Estado de la clase
		this.state = {
			city: "Bogotá",
			data: data1
		};
	}
	//Se crea función para el click del button
	handleUpdateClick = () => {
		console.log('upd');
		//Para actualizar el state se debe usar la función setState
		this.setState({
			city: 'Santiago de Cali',
			data: data2
		});
	}
	//Método que renderiza la clase
	render() {
		const { city, data } = this.state;
		return (
			<div className="weatherLocationCont">
				<Location city={city} />
				<WeatherData data={data} />
				<button onClick={this.handleUpdateClick}>Actualizar</button>
			</div>
		);
	}
}

export default WeatherLocation;