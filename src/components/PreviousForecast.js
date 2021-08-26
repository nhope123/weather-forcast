import React, { useContext } from 'react'
import { defaultClassname } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'

const PreviousForecast = ( props ) => {

   const { previousForecast } = useContext( CityContext )
    return (
        < >
            {
                (previousForecast.length >= 5 ) && (
                    <div className={ `${ defaultClassname } flex-column justify-content-center align-items-center my-2 ` }
                         title={ `${ props.date } weather forecast` }>
                        {/* date / day */}
                        <h3 id={ 'forecast-date' } >{ props.date }</h3>
                        {/* Temperature */}
                        <div data-testid={ `day${props.test + 1}` } >{ props.temp }</div>
                        {/* description */}
                        <div className={`${ defaultClassname } flex-column justify-content-center align-items-center` } 
                             title={ props.desc }>
                            <img src={ props.icon } className={ 'w-50' }
                                 alt={ props.desc } />
                        </div>
                    </div>
                )
            }            
        </ >
    )
}

export default PreviousForecast
