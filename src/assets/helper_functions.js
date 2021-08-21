import axios from 'axios';

require( 'dotenv' ).config({path: '../../.env'})

const API_Key = '8fbc6e262d6708f76878fede278c3f99';

console.log( `key ${API_Key}`);

const currentURL = 'http://api.openweathermap.org/data/2.5/weather?q=' //{city name}&appid={API key}
const previousURL = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?lat='

//{lat}&lon={lon}&dt={time}&appid={API key}'

export const fetchCurrent = async ( city  ) =>{
    
   const response = ( await axios.get( `${ currentURL }${ city }&units=metric&appid=${API_Key}`))
                        
   return response.data
}

export const fetchPrevious = async ( coordinates, day  ) =>{
    
   const response = ( await axios.get( `${ previousURL }${ coordinates.lat }&lon=${ coordinates.lon}&dt=${ calculateDay( day ) }&appid=${ API_Key}`))
                        
   return response.data
}


export const calculateDay = ( value ) =>{
   return ( Date.now() - ( value * 86400 ) )

}