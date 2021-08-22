import React, { useContext } from 'react'
import { processForcast } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'
import CurrentForcast from './CurrentForcast'
import NullComponent from './NullComponent'
import PreviousForcast from './PreviousForcast'

const Main = () => {

    const { city, coordinates, previousForcast } = useContext( CityContext)
    
    //console.log(previousForcast);
    return (
        < >
            {
                ( city ) && <CurrentForcast /> 
            }
            {
                ( coordinates ) && <NullComponent />
            }
            {
                ( coordinates )? (
                    <div className={'position-relative d-flex flex-row flex-wrap justify-content-center align-items-center '} >
                        {
                           (previousForcast.length > 0) &&  previousForcast.map( forcast =>{
                                console.log(`id:${forcast.current.dt}`);
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
