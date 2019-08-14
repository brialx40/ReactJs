import moment from 'moment';
import tranformWeather from './transformWeather';

const tranformForecast = data => (
	data.list.filter(item => {
		return moment.unix(item.dt).hour() === 7 || moment.unix(item.dt).hour() === 13 || moment.unix(item.dt).hour() === 19;
	}).map(item => (
		{
			weekDay: moment.unix(item.dt).format('ddd'),
			hour: moment.unix(item.dt).hour(),
			data: tranformWeather(item)
		}
	))
);

export default tranformForecast;