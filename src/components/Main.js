import React, { useContext } from 'react'
import { defaultClassname} from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'
import CurrentForcast from './CurrentForcast'
import PreviousForcast from './PreviousForcast'

const Main = () => {

    const { previousForcast, isFirstLoad } = useContext( CityContext)
    
    return (
        < >
            {   (previousForcast.length === 5)? (
                <>
                     <CurrentForcast /> 

                    <div className={`${ defaultClassname } flex-row flex-wrap justify-content-center align-items-center `} 
                         role={'region'} aria-label={'5 day forcast history'} >
                        {
                           previousForcast.map( forcast =>{
                               
                               return <PreviousForcast key={forcast.key} { ...forcast } />
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
