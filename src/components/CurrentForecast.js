import React, { useContext} from 'react'
import { defaultClassname, rowBetween } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'
import Daylight from './Daylight'

export const padding = 'px-3'

const CurrentForecast = ()  => {
    
    const { currentForecast } = useContext( CityContext )
          
    return (
                        
        <div className={ `${ defaultClassname } flex-column justify-content-start align-items-between current-forecast mb-3` }>

            {/* Location and date */}
            <div role={ 'region' } aria-label={'Address and current date'} >
                <h2 className={'text-center'} title={'Forecast location'} >{ `${ currentForecast.name }, ${ currentForecast.country}`}</h2>
                <div className={'text-center'} title={"Today's date"} >{ currentForecast.date }</div>
            </div>

            {/* Temperature */}
            <div className={ `${ defaultClassname } ${ rowBetween } align-items-center pb-3 px-4`} 
                 role={'region'} aria-label={'current temperture'} >
                <h2 className={'current-temp m-0 align-middle  fw-bold'} title={'current temperature'} 
                    data-testid={'current temp'}>{ currentForecast.temp }</h2>
                <div className={`${ defaultClassname } flex-column justify-content-center `}
                     title={currentForecast.desc} >
                    <img src={ currentForecast.icon }
                            alt={ currentForecast.desc } />
                    <div className={'text-center'} >{ currentForecast.main }</div>
                </div>
            </div>
            
            <div className={ `${ defaultClassname } ${ rowBetween } `}
                 role={'region'} aria-label={'current weather status'}  >

                {/* Status */}
                <Daylight {...{time: 'sunrise', data: currentForecast.sunrise }} title={ 'Sunrie' } />
                <Daylight {...{time: 'sunset', data: currentForecast.sunset }} title={ 'Sunset' } />
                
                {/* feels like */}
                <div className={ `${ defaultClassname } flex-column justify-content-end ${ padding }`}
                     title={'Feels like '} >
                    <div >{'Feels' }</div>
                    <div className={'text-center'} >{ currentForecast.feel }</div>
                </div>

                {/* High and low */}
                <div className={ `${ defaultClassname } flex-row justify-content-center align-items-end ${ padding }`} >
                    <span className={'position-relative d-inline-block min-temp '} title={'min Temperature'} >
                        { currentForecast.temp_min }
                    </span>
                    <span className={'position-relative d-inline-block fs-2  lh-base division'}>{'/'}</span>
                    <span className={'position-relative d-inline-block max-temp'} title={'max Temperature'} >
                        { currentForecast.temp_max }
                    </span>
                                                
                </div>


            </div>
            
        </div>
                
    )
}

export default CurrentForecast
