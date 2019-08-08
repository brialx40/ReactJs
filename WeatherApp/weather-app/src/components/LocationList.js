import React from 'react';
import {
	PropTypes
} from 'prop-types';
import WeatherLocation from './WeatherLocation';


//Se define LocationList
const LocationList = ({ cities, onSelectedLocation }) => {
	//Handle del evento
	const handleWLClick = city => {
		console.log('handleWLClick');
		onSelectedLocation(city);
	};
	//Obtiene lista de componentes
	const getComponentsWL = cities => (
		cities.map(city =>
			(
				<WeatherLocation
					key={city}
					city={city}
					onWeatherLocationClick={() => handleWLClick(city)} />
			))
	);
	return (
		<div>
			{
				getComponentsWL(cities)
			}
		</div>
	);
};

LocationList.propTypes = {
	cities: PropTypes.array.isRequired,
}

export default LocationList;