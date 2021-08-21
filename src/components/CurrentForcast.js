import dayjs from 'dayjs'
import React, { useContext, useEffect } from 'react'
import { Sunrise, Sunset } from 'react-bootstrap-icons'
import { useQueries, useQuery } from 'react-query'
import { fetchCurrent, fetchPrevious } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'


const CurrentForcast = ()  => {
    
    const { city, setCurrentForcast  } = useContext( CityContext )
    
    const {data, error, status } = useQuery( 'weather',()=> fetchCurrent( city))
    
    useEffect(() => {
        setCurrentForcast( data )
        //console.log(`sunrise${dayjs.unix( data.sys.sunrise)}`);
    }, [ data ])

  

    return (
        < >
            {
                (data ) && (
                    <div>

                        {/* Location */}
                        <div >
                            <h2 >{ `${ data.name }, ${ data.sys.country}`}</h2>
                        </div>

                        {/* Temperature */}
                        <div >
                            <h1 >{`${ Math.floor(data.main.temp)}°C` }</h1>
                            <div >
                                <img src={ `http://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png`}
                                     alt={ data.weather[0].description } />
                                <div >{ data.weather[0].main }</div>
                            </div>
                        </div>
                        
                        <div >

                            {/* Status */}
                            <div >
                                <Sunrise />
                                <div >{ dayjs.unix( data.sys.sunrise).format('h:mm a')  }</div>
                            </div>
                            <div >
                                <Sunset />
                                <div >{ dayjs.unix( data.sys.sunset).format('h:mm a')  }</div>
                            </div>

                            {/* feels like */}
                            <div >
                                <div >{'Feels like' }</div>
                                <div >{ `${Math.floor(data.main.feels_like)}°C` }</div>
                            </div>

                            {/* High and low */}
                            <div >{ `${Math.floor(data.main.temp_min)}°C / ${Math.floor(data.main.temp_max)}°C`}                            
                            </div>


                        </div>

                    </div>
                )
            }
            
        </ >
    )
}

export default CurrentForcast
