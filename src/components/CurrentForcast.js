import dayjs from 'dayjs'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { fetchCurrent } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'
import Daylight from './Daylight'


const CurrentForcast = ()  => {
    
    const { city, getCoordinates ,previousForcast } = useContext( CityContext )
    
    const { data } = useQuery( 'weather',()=> fetchCurrent( city), { onSuccess: data=> getCoordinates( data.coord), cacheTime: Infinity})
        
    return (
        < >
            {
                (previousForcast.length >= 5 ) && (
                    <div className={ ' d-flex flex-column justify-content-start align-items-between position-relative current-forcast mb-3' }>

                        {/* Location */}
                        <div >
                            <h2 className={'text-center'} >{ `${ data.name }, ${ data.sys.country}`}</h2>
                            <div className={'text-center'} >{ dayjs.unix( data.dt).format('ddd, MMM D, h:ssa')}</div>
                        </div>

                        {/* Temperature */}
                        <div className={ 'position-relative d-flex flex-row justify-content-between align-items-center pb-3'} >
                            <h1 className={'current-temp m-0 align-middle pe-3 fw-bold'} >{`${ Math.round(data.main.temp)}°C` }</h1>
                            <div className={'d-flex flex-column justify-content-center '} >
                                <img src={ `http://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png`}
                                     alt={ data.weather[0].description } />
                                <div className={'text-center'} >{ data.weather[0].main }</div>
                            </div>
                        </div>
                        
                        <div className={'position-relative d-flex flex-row justify-contents-between '} >

                            {/* Status */}
                            <Daylight {...{time: 'sunrise', data: data.sys.sunrise }} />
                            <Daylight {...{time: 'sunset', data: data.sys.sunset }} />
                            
                            {/* feels like */}
                            <div className={'position-relative d-flex flex-column justify-content-end px-2'}>
                                <div >{'Feels' }</div>
                                <div className={ 'feel-like '}>{ `${Math.round(data.main.feels_like)}°C` }</div>
                            </div>

                            {/* High and low */}
                            <div className={'position-relative d-flex flex-row justify-content-center align-items-end feel-like  px-2'} >
                                <span className={'position-relative d-inline-block min-temp'} >{`${Math.round(data.main.temp_min)}°C`}</span>
                                <span className={'position-relative d-inline-block fs-2  lh-base division'}>{'/'}</span>
                                <span className={'position-relative d-inline-block max-temp'}  >{`${Math.round(data.main.temp_max)}°C`}</span>
                                                           
                            </div>


                        </div>
                       
                    </div>
                )
            }
            
        </ >
    )
}

export default CurrentForcast
