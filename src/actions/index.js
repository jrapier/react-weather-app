import axios from 'axios';

const API_KEY = '1d1d62674d0632601e5ac54d2b90b8da';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//api.openweathermap.org/data/2.5/weather?q={city name},{country code}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    let url = `${ROOT_URL}&q=${city},us`;
    let request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}