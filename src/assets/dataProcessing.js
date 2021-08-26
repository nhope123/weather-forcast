import dayjs  from 'dayjs';

export const processForecastHistory = data => {

    return (
        {
            temp: `${ Math.round( data.current.temp )}°C`,
            main: data.current.weather[0].main,
            desc: data.current.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${ data.current.weather[0].icon }@2x.png`,
            date: `${dayjs.unix( data.current.dt ).format('ddd D')}`,
            key: data.current.dt          
        }
    );      
}

export const processLocalForecast = data => {

    return (
        {
            name: data.name,
            country: data.sys.country,
            date: dayjs.unix( data.dt).format('ddd, MMM D, h:ssa'),
            temp: `${ Math.round(data.main.temp)}°C`,
            icon: `http://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png`,
            desc: data.weather[0].description,
            main: data.weather[0].main,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            feel: `${Math.round(data.main.feels_like)}°C`,
            temp_min: `${Math.round(data.main.temp_min)}°C`,
            temp_max: `${Math.round(data.main.temp_max)}°C`
        }
    );      
}