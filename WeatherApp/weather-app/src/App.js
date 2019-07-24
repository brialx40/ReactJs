import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

// Definición de una Class component
class App extends Component {
	render() {
		return (
			<div className="App" >
				<WeatherLocation />
			</div>
		);
	};
}

export default App;