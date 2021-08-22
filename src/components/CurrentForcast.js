import dayjs from 'dayjs'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { defaultClassname, fetchCurrent, rowBetween } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'
import Daylight from './Daylight'

 export const padding = 'px-3'

const CurrentForcast = ()  => {
    
    const { city, getCoordinates ,previousForcast } = useContext( CityContext )
    
    const { data } = useQuery( 'weather',()=> fetchCurrent( city), { onSuccess: data=> getCoordinates( data.coord), cacheTime: Infinity})
        
    return (
        < >
            {
                (previousForcast.length >= 5 ) && (
                    <div className={ `${ defaultClassname } flex-column justify-content-start align-items-between current-forcast mb-3` }>

                        {/* Location and date */}
                        <div >
                            <h2 className={'text-center'} >{ `${ data.name }, ${ data.sys.country}`}</h2>
                            <div className={'text-center'} >{ dayjs.unix( data.dt).format('ddd, MMM D, h:ssa')}</div>
                        </div>

                        {/* Temperature */}
                        <div className={ `${ defaultClassname } ${ rowBetween } align-items-center pb-3 px-4`} >
                            <h1 className={'current-temp m-0 align-middle  fw-bold'} >{`${ Math.round(data.main.temp)}°C` }</h1>
                            <div className={`${ defaultClassname } flex-column justify-content-center `} >
                                <img src={ `http://openweathermap.org/img/wn/${ data.weather[0].icon}@2x.png`}
                                     alt={ data.weather[0].description } />
                                <div className={'text-center'} >{ data.weather[0].main }</div>
                            </div>
                        </div>
                        
                        <div className={ `${ defaultClassname } ${ rowBetween } `} >

                            {/* Status */}
                            <Daylight {...{time: 'sunrise', data: data.sys.sunrise }} />
                            <Daylight {...{time: 'sunset', data: data.sys.sunset }} />
                            
                            {/* feels like */}
                            <div className={ `${ defaultClassname } flex-column justify-content-end ${ padding }`}>
                                <div >{'Feels' }</div>
                                <div className={ 'feel-like '}>{ `${Math.round(data.main.feels_like)}°C` }</div>
                            </div>

                            {/* High and low */}
                            <div className={ `${ defaultClassname } flex-row justify-content-center align-items-end feel-like  ${ padding }`} >
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
