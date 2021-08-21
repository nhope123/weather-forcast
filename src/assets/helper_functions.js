import axios from 'axios';

require( 'dotenv' ).config({path: '../../.env'})

const API_Key = '8fbc6e262d6708f76878fede278c3f99';

console.log( `key ${API_Key}`);

const currentURL = 'http://api.openweathermap.org/data/2.5/weather?q=' //{city name}&appid={API key}
export const fetchData = async ( city  ) =>{
    
   const response = ( await axios.get( `http://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=8fbc6e262d6708f76878fede278c3f99`))
                        
   return response.data
}