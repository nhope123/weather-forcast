import React, { useContext} from 'react'
import { defaultClassname, rowBetween } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'
import Daylight from './Daylight'

export const padding = 'px-3'

const CurrentForcast = ()  => {
    
    const { currentForcast } = useContext( CityContext )
          
    return (
                        
        <div className={ `${ defaultClassname } flex-column justify-content-start align-items-between current-forcast mb-3` }>

            {/* Location and date */}
            <div role={ 'region' } aria-label={'Address and current date'} >
                <h2 className={'text-center'} title={'Forcast location'} >{ `${ currentForcast.name }, ${ currentForcast.country}`}</h2>
                <div className={'text-center'} title={"Today's date"} >{ currentForcast.date }</div>
            </div>

            {/* Temperature */}
            <div className={ `${ defaultClassname } ${ rowBetween } align-items-center pb-3 px-4`} 
                 role={'region'} aria-label={'current temperture'} >
                <h2 className={'current-temp m-0 align-middle  fw-bold'} title={'current temperature'} >{ currentForcast.temp }</h2>
                <div className={`${ defaultClassname } flex-column justify-content-center `}
                     title={currentForcast.desc} >
                    <img src={ currentForcast.icon }
                            alt={ currentForcast.desc } />
                    <div className={'text-center'} >{ currentForcast.main }</div>
                </div>
            </div>
            
            <div className={ `${ defaultClassname } ${ rowBetween } `}
                 role={'region'} aria-label={'current weather status'}  >

                {/* Status */}
                <Daylight {...{time: 'sunrise', data: currentForcast.sunrise }} title={ 'Sunrie' } />
                <Daylight {...{time: 'sunset', data: currentForcast.sunset }} title={ 'Sunset' } />
                
                {/* feels like */}
                <div className={ `${ defaultClassname } flex-column justify-content-end ${ padding }`}
                     title={'Feels like '} >
                    <div >{'Feels' }</div>
                    <div className={'text-center'} >{ currentForcast.feel }</div>
                </div>

                {/* High and low */}
                <div className={ `${ defaultClassname } flex-row justify-content-center align-items-end ${ padding }`} >
                    <span className={'position-relative d-inline-block min-temp '} title={'min Temperature'} >
                        { currentForcast.temp_min }
                    </span>
                    <span className={'position-relative d-inline-block fs-2  lh-base division'}>{'/'}</span>
                    <span className={'position-relative d-inline-block max-temp'} title={'max Temperature'} >
                        { currentForcast.temp_max }
                    </span>
                                                
                </div>


            </div>
            
        </div>
                
    )
}

export default CurrentForcast
