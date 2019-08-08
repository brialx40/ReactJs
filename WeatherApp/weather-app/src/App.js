import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
			<Grid className="App" >
				<Row>
					<AppBar position='sticky'>
						<Toolbar>
							<Typography color='inherit'>
								Weather App
							</Typography>
						</Toolbar>
					</AppBar>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<LocationList
							cities={cities}
							onSelectedLocation={this.handleSelectionLocation} />
					</Col>
					<Col xs={12} md={6}>
						<div className="details"></div>
					</Col>
				</Row>
			</Grid>
		);
	};
}

export default App;