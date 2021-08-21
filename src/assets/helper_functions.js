import axios from 'axios';
import dayjs  from 'dayjs';

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
   const url = `${ previousURL }${ coordinates.lat }&lon=${ coordinates.lon}&dt=${ calculateDay( day ) }&appid=${ API_Key}`
   const response = ( await axios.get( url )
                              //.then( res =>  {return res.data} )
                              //.catch( err => {return err} )
                              
                              )
   console.log(`response:${response}`);                
   return response
}


export const calculateDay = ( value ) =>{

   /** bug  */
   

   
   //dayjs.extend(toObject)
   const date = dayjs()
   console.log(`C-Time: ${date.toObject() }, 1-day: 86400, total: ${date - 86400}`);
   return ( dayjs() - ( value * 86400 ) )

}