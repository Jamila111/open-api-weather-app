

const DescriptionMiniWidgets = ({ weather, units }) => {
    const tempUnit = units === 'metric' ? '°C' : '°F';
    const windUnit = units === 'metric' ? 'm/s' : 'mph';
    const pressureUnit = 'hPa';

    const widgets = [
        {
            id: 1,
            title: 'min',
            icon: '11d',
            data: weather?.temp_min.toFixed(),
            unit: tempUnit
        },
        {
            id: 2,
            title: 'max',
            icon: '01d',
            data: weather?.temp_max.toFixed(),
            unit: tempUnit
        },
        {
            id: 3,
            title: 'feels like',
            icon: '02d',
            data: weather?.feels_like.toFixed(),
            unit: tempUnit
        },
        {
            id: 4,
            title: 'pressure',
            icon: '50d',
            data: weather?.pressure,
            unit: pressureUnit
        },
        {
            id: 5,
            title: 'wind speed',
            icon: '50n',
            data: weather?.speed.toFixed(),
            unit: windUnit
        },
        {
            id: 6,
            title: 'humidity',
            icon: '03d',
            data: weather?.humidity,
            unit: '%'
        },
    ];

    return (
        <div className="section section-miniWidgets">
            {widgets.map(({ id, title, icon, data, unit }) => (
                <div key={id} className='cell'>
                    <div className='description-cell-title'>
                        <img
                            src={`http://openweathermap.org/img/wn/${icon}.png`}
                            alt={title}
                            style={{ width: '30px', height: '30px' }}
                        />
                        {title}
                    </div>
                    <h3>{data ? `${data} ${unit}` : 'N/A'}</h3>
                </div>
            ))}
        </div>
    );
};

export default DescriptionMiniWidgets;