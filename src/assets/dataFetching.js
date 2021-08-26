import axios from 'axios';
import dayjs  from 'dayjs';

const API_Key =  process.env.REACT_APP_WEATHER_API_KEY

const currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' 
const previousURL = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?units=metric&lat='

export const fetchCurrentForecast = async ( city  ) =>{    
    const response = await axios.get( `${ currentURL }${ city }&units=metric&appid=${API_Key}`)
    
    return response.data
}

 export const fetchHistoryForecast = async ( coordinates, day  ) =>{
    const calculatedDay = dayjs().subtract( day, 'days').unix()
    const url = `${ previousURL }${ coordinates.lat }&lon=${ coordinates.lon }&dt=${ calculatedDay }&appid=${ API_Key }`   
    const response = await axios.get( url )                 
    
    return response.data
 }