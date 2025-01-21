
const API_KEY = 'e7942ccd1b39dd1e6541c162b5b5f7d3';

const getWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    // const iconURLDynamic = (iconId) => `https://openweathermap.org/img/wn/10d@2x.png`;

    try {
        const response = await fetch(URL);
        const data = await response.json();

        const {
            main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
            wind: { speed },
            sys: { country },
            clouds: { all },
            weather
        } = data;

        const { main, description, icon } = weather[0];

        return {
            main,
            description,
            iconURL: icon,
            temp,
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity,
            speed,
            country,
            all
        };
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
};

export { getWeatherData };