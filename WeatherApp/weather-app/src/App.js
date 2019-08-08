import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

//Lista de ciudades
const cities = [
	"Bogota,co",
	"Buenos Aires,ar",
	"Washington,us",
	"Barcelona,es"
];

// Definición de una Class component
class App extends Component {
	//Se define método que ejecuta ev
	handleSelectionLocation = city => {
		console.log(`handleSelectionLocation ${city}`);
	}

	render() {
		return (
			<div className="App" >
				<LocationList
					cities={cities}
					onSelectedLocation={this.handleSelectionLocation} />
			</div>
		);
	};
}

export default App;