import './App.css';
import {useEffect, useState} from "react";
import sunset from "./pictures/sunset.jpg";
import DescriptionMiniWidgets from "./components/DescriptionMiniWidgets";
import {getWeatherData} from "./weatherService";

function App() {

    const [city, setCity] = useState('New York');
    const [weather, setWeather] = useState(null);
    const [units, setUnits] = useState('metric');
    const [input, setInput] = useState('');


    useEffect(() => {

        const fetchWeatherData = async () => {
            const data = await getWeatherData(city, units)
            setWeather(data)
            console.log(data)
        }

        fetchWeatherData()

    }, [city, units])


    const updateCity = (e) => {
        if (e.keyCode === 13) {
            setCity(e.currentTarget.value);
            setInput('');
        }
    }

    const handleUnitsClick = () => {
        setUnits(units === 'metric' ? 'imperial' : 'metric');
    };

    const tempUnit = units === 'metric' ? '°C' : '°F';


    return (
        <div className="App" style={{
            backgroundImage: `url(${sunset})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <h1>Weather Widgets App</h1>

            <div className='overlay'>

                <div className='container'>

                    <div className='section section-input'>

                        <input
                            type="text"
                            placeholder="Enter city"
                            onKeyDown={updateCity}
                            name="city"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />

                        <button onClick={handleUnitsClick}>
                            {units === 'metric' ? '°F' : '°C'}
                        </button>

                    </div>


                    {weather && (
                        <div className='section section-temperature'>
                            <div className='icon'>
                                <h3>{`${city}, ${weather.country}`}</h3>
                                <img
                                    src={`http://openweathermap.org/img/wn/${weather.iconURL}@2x.png`}
                                    alt='icon name'
                                />
                                <h3>{`${weather.main}`}</h3>
                                <h4>{weather.description}</h4>
                            </div>

                            <div className='temperature'>
                                <h2>{`${weather.temp.toFixed()}${tempUnit}`}</h2>
                            </div>
                        </div>
                    )}

                    <DescriptionMiniWidgets
                        weather={weather}
                        units={units}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;


// const API-KEY = 'e7942ccd1b39dd1e6541c162b5b5f7d3';
// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API-KEY}