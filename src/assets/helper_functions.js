
import axios from 'axios';
import dayjs  from 'dayjs';


export const defaultClassname = 'position-relative d-flex '
export const rowBetween = 'flex-row justify-content-between'

const API_Key =  process.env.REACT_APP_WEATHER_API_KEY

const currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' 
const previousURL = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?units=metric&lat='


export const fetchCurrentForcast = async ( city  ) =>{
    
   //console.log(`fetchcurrent: ${city}`);
   const response = ( await axios.get( `${ currentURL }${ city }&units=metric&appid=${API_Key}`))
                        
   return response.data
}

export const fetchHistoryForcast = async ( coordinates, day  ) =>{
   const url = `${ previousURL }${ coordinates.lat }&lon=${ coordinates.lon}&dt=${ calculateDay( day ) }&appid=${API_Key}`
  
   const response = ( await axios.get( url ) )              
   return response.data
}

export const processForcastHistory = data => {

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

export const processLocalForcast = data => {

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


export const calculateDay = ( value ) =>{

   return ( dayjs().subtract( value, 'days').unix())

}

export const debounce = (func, timeout = 300) =>{
   let timer;
   return (...args) => {
     clearTimeout(timer);
     timer = setTimeout(() => { func.apply(this, args); }, timeout);
   };
 }