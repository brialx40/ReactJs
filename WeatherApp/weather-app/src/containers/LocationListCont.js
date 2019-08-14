import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from './../actions/index';
import LocationList from './../components/LocationList';


class LocationListCont extends Component {
	//Se define método que ejecuta ev
	handleSelectionLocation = city => {
		this.setState({ city });
		console.log(`handleSelectionLocation ${city}`);
		//Se define acción al store
		this.props.setCity(city);
	}

	render() {
		return (
			<LocationList
				cities={this.props.cities}
				onSelectedLocation={this.handleSelectionLocation} ></LocationList>
		);
	}
}

LocationListCont.propTypes = {
	setCity: PropTypes.func.isRequired,
	cities: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => ({
	setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListCont);