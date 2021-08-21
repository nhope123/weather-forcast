import React, { useContext, useEffect } from 'react'
import { useQuery } from 'react-query'
import { fetchCurrent } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'
import Daylight from './Daylight'


const CurrentForcast = ()  => {
    
    const { city, setCoordinates  } = useContext( CityContext )
    
    const { data } = useQuery( 'weather',()=> fetchCurrent( city))
    
    useEffect(() => {
        if(data){
            setCoordinates( data.coord )
        }
    }, [ data, setCoordinates ])

    
    return (
        < >
            {
                (data ) && (
                    <div className={ ' d-flex flex-column justify-content-start align-items-between position-relative' }>

                        {/* Location */}
                        <div >
                            <h2 className={'text-center'} >{ `${ data.name }, ${ data.sys.country}`}</h2>
                        </div>

                        {/* Temperature */}
                        <div className={ 'position-relative d-flex flex-row justify-content-between align-items-center pb-3'} >
                            <h1 className={'current-temp m-0 align-middle pe-3 fw-bold'} >{`${ Math.floor(data.main.temp)}°C` }</h1>
                            <div className={'d-flex flex-column justify-content-center '} >
                                <img src={ `http://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png`}
                                     alt={ data.weather[0].description } />
                                <div className={'text-center'} >{ data.weather[0].main }</div>
                            </div>
                        </div>
                        
                        <div className={'position-relative d-flex flex-row justify-contents-between pb-3'} >

                            {/* Status */}
                            <Daylight {...{time: 'sunrise', data: data.sys.sunrise }} />
                            <Daylight {...{time: 'sunset', data: data.sys.sunset }} />
                            
                            {/* feels like */}
                            <div className={'position-relative d-flex flex-column justify-content-end px-2'}>
                                <div >{'Feels' }</div>
                                <div className={ 'feel-like '}>{ `${Math.floor(data.main.feels_like)}°C` }</div>
                            </div>

                            {/* High and low */}
                            <div className={'position-relative d-flex flex-column justify-content-end feel-like  px-2'} >{ `${Math.floor(data.main.temp_min)}°C / ${Math.floor(data.main.temp_max)}°C`}                            
                            </div>


                        </div>

                    </div>
                )
            }
            
        </ >
    )
}

export default CurrentForcast
