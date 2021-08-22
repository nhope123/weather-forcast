import React, { useContext } from 'react'
import { defaultClassname, processForcast } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'
import CurrentForcast from './CurrentForcast'
import NullComponent from './NullComponent'
import PreviousForcast from './PreviousForcast'

const Main = () => {

    const { city, coordinates, previousForcast } = useContext( CityContext)
    
    return (
        < >
            {   ( city ) && <CurrentForcast />  }
            
            {   ( coordinates ) && <NullComponent />  }

            {
                ( coordinates )? (
                    <div className={`${ defaultClassname } flex-row flex-wrap justify-content-center align-items-center `} >
                        {
                           (previousForcast.length > 0) &&  previousForcast.map( forcast =>{
                               
                               return <PreviousForcast key={forcast.current.dt} { ...processForcast( forcast) } />
                            })
                        }
                    </div>
                ):  <div className={'welcome'} >
                    <h2 >{ 'Welcome ' }</h2>
                    </div>
            }
        </ >
    )
}

export default Main
