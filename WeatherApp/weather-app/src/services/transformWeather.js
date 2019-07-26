import convert from 'convert-units';
import { SUN } from '../constants/weathers';

//función que convierte datos K a C°
const getTemp = kelvin => {
	return Number(convert(kelvin).from("K").to("C").toFixed(2));
}
//función que retorna el estado del clima
const getWeatherState = () => {
	return SUN;
}
//función que realiza las transformaciones d elos datos del api para la aplicación
const transformWeather = weather_data => {
	const { humidity, temp } = weather_data.main;
	const { speed } = weather_data.wind;
	const weatherState = getWeatherState();
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