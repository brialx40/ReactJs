import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

//Lista de ciudades
const cities = [
	"Bogota,co",
	"Buenos Aires,ar",
	"Washington,us",
	"Paris,it",
	"Barcelona,es"
];

// Definición de una Class component
class App extends Component {

	constructor() {
		super();
		this.state = { city: null };
	}
	//Se define método que ejecuta ev
	handleSelectionLocation = city => {
		this.setState({ city })
	}

	render() {
		const { city } = this.state;
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
						<Paper>
							<div className="details">
								{
									city && <ForecastExtended city={city}></ForecastExtended>
								}
							</div>
						</Paper>
					</Col>
				</Row>
			</Grid>
		);
	};
}

export default App;