import axios from 'axios';

const API_KEY = '2a6b5b520f16becc40f248d669d20a41';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type : FETCH_WEATHER,
		payload: request
	};
}