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
            <div >
                <h2 className={'text-center'} >{ `${ currentForcast.name }, ${ currentForcast.country}`}</h2>
                <div className={'text-center'} >{ currentForcast.date }</div>
            </div>

            {/* Temperature */}
            <div className={ `${ defaultClassname } ${ rowBetween } align-items-center pb-3 px-4`} >
                <h1 className={'current-temp m-0 align-middle  fw-bold'} >{ currentForcast.temp }</h1>
                <div className={`${ defaultClassname } flex-column justify-content-center `} >
                    <img src={ currentForcast.icon }
                            alt={ currentForcast.desc } />
                    <div className={'text-center'} >{ currentForcast.main }</div>
                </div>
            </div>
            
            <div className={ `${ defaultClassname } ${ rowBetween } `} >

                {/* Status */}
                <Daylight {...{time: 'sunrise', data: currentForcast.sunrise }} />
                <Daylight {...{time: 'sunset', data: currentForcast.sunset }} />
                
                {/* feels like */}
                <div className={ `${ defaultClassname } flex-column justify-content-end ${ padding }`}>
                    <div >{'Feels' }</div>
                    <div className={'text-center'} >{ currentForcast.feel }</div>
                </div>

                {/* High and low */}
                <div className={ `${ defaultClassname } flex-row justify-content-center align-items-end ${ padding }`} >
                    <span className={'position-relative d-inline-block min-temp '} >{ currentForcast.temp_min }</span>
                    <span className={'position-relative d-inline-block fs-2  lh-base division'}>{'/'}</span>
                    <span className={'position-relative d-inline-block max-temp'}  >{ currentForcast.temp_max }</span>
                                                
                </div>


            </div>
            
        </div>
                
    )
}

export default CurrentForcast
