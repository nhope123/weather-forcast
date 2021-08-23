import React, { useContext } from 'react'
import { defaultClassname} from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'
import CurrentForecast from './CurrentForecast'
import PreviousForecast from './PreviousForecast'

const Main = () => {

    const { previousForecast, isFirstLoad } = useContext( CityContext)
    
    return (
        < >
            {   (previousForecast.length === 5)? (
                <>
                     <CurrentForecast /> 

                    <div className={`${ defaultClassname } flex-row flex-wrap justify-content-center align-items-center `} 
                         role={'region'} aria-label={'5 day forecast history'} >
                        {
                           previousForecast.map( forecast =>{
                               
                               return <PreviousForecast key={forecast.key} { ...forecast } />
                            })
                        }
                    </div>
                </>): 
                
                <div className={'welcome'} role={'alert'} aria-labelledby={'stand in'}  >                    
                    <h2 id={'stand in'} >
                        { `${ ( isFirstLoad )? 'Welcome' : 'Loading.........' }` }
                    </h2>
                </div>
            }
        </ >
    )
}

export default Main
