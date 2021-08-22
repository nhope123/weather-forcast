
import axios from 'axios';
import dayjs  from 'dayjs';


export const defaultClassname = 'position-relative d-flex '
export const rowBetween = 'flex-row justify-content-between'

const API_Key =  process.env.REACT_APP_WEATHER_API_KEY

const currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' 
const previousURL = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?units=metric&lat='


export const fetchCurrent = async ( city  ) =>{
    
   console.log(`fetchcurrent: ${city}`);
   const response = ( await axios.get( `${ currentURL }${ city }&units=metric&appid=${API_Key}`))
                        
   return response.data
}

export const fetchPrevious = async ( coordinates, day  ) =>{
   const url = `${ previousURL }${ coordinates.lat }&lon=${ coordinates.lon}&dt=${ calculateDay( day ) }&appid=${API_Key}`
  
   const response = ( await axios.get( url ) )              
   return response.data
}

export const processForcast = data => {

      return (
         {
            temp: `${ Math.round( data.current.temp )}°C`,
            main: data.current.weather.main,
            desc: data.current.weather.description,
            icon: `http://openweathermap.org/img/wn/${ data.current.weather[0].icon }@2x.png`,
            date: `${dayjs.unix( data.current.dt ).format('ddd D')}`,
            id: data.current.dt          
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