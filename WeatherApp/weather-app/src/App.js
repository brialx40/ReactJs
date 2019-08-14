import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ForecastExtendedCont from './containers/ForecastExtendedCont';
import LocationListCont from './containers/LocationListCont';

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

	render() {

		return (
			<MuiThemeProvider>
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
							<LocationListCont cities={cities} ></LocationListCont>
						</Col>
						<Col xs={12} md={6}>
							<Paper>
								<div className="details">
									<ForecastExtendedCont></ForecastExtendedCont>
								</div>
							</Paper>
						</Col>
					</Row>
				</Grid>
			</MuiThemeProvider>
		);
	};
}

export default App;