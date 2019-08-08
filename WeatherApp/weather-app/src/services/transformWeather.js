import convert from 'convert-units';
import {
	SUN,
	CLOUD,
	RAIN,
	SNOW,
	THUNDER,
	DRIZZLE
} from '../constants/weathers';

//función que convierte datos K a C°
const getTemp = kelvin => {
	return Number(convert(kelvin).from("K").to("C").toFixed(0));
}
//función que retorna el estado del clima
const getWeatherState = weather_data => {
	const { id } = weather_data;
	let weather = null;

	if (id < 300) {//si el identificador es menor a 300 es THUNDER
		weather = THUNDER;
	} else if (id < 400) {//si el identificador es menor a 400 es DRIZZLE
		weather = DRIZZLE;
	} else if (id < 600) {//si el identificador es menor a 600 es RAIN
		weather = RAIN;
	} else if (id < 700) {
		weather = SNOW;
	} else if (id === 800) {
		weather = SUN;
	} else {
		weather = CLOUD;
	}
	return weather;
}
//función que realiza las transformaciones d elos datos del api para la aplicación
const transformWeather = weather_data => {
	const { humidity, temp } = weather_data.main;
	const { speed } = weather_data.wind;
	const weatherState = getWeatherState(weather_data.weather[0]);
	const temperature = getTemp(temp);
	//const weatherState = this.getWeatherState(weather_data);

	//Se crea el object 
	const data = {
		humidity,
		temperature,
		weatherState,
		wind: `${speed} m/s`
	};

	return data;
}

export default transformWeather;