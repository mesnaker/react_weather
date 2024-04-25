import axios from "axios"

const API_KEY = 'a85b7a9bbeb7cba4d3c981ea3566b4fe'
const API_GEO_URL = 'http://api.openweathermap.org/geo/1.0/direct'
const API_WEATHER_URL = 'https://api.openweathermap.org/data/2.8/onecall'

export const getWeatherData = async (city) => {
    try {
        const geoResponse = await axios.get(
            `${API_GEO_URL}?q=${city}&appid=${API_KEY}`
        )
        const { lat, lon, local_names } = geoResponse.data?.[0]
        const weatherResponse = await axios.get(
            `${API_WEATHER_URL}?lat=${lat}&lon=${lon}&units=metric&lang=ru&exclude=minutely,hourely,alerts&appid=${API_KEY}`
        )
        const allData = {...weatherResponse.data, local_names}
        console.log(weatherResponse.data);
        return allData
    } catch (error) {
        console.log(error);
    }
}