import { API_KEY } from 'react-native-dotenv'

const fetchWeather = (lat = 25, lon = 25) =>
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
  .then(res => res.json());

export default fetchWeather;
