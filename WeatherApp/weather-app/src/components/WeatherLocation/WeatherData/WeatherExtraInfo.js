import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
	<div className="weatherExtraInfoCont">
		<span className="extraInfoText">{`${humidity} %`}</span>
		<span className="extraInfoText">{`${wind} viento`}</span>
	</div>
);

WeatherExtraInfo.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;