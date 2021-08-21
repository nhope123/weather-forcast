import React, { useContext } from 'react'
import { CityContext } from '../context/CityContextProvider'
import CurrentForcast from './CurrentForcast'
import PreviousForcast from './PreviousForcast'

const Main = () => {

    const { city } = useContext( CityContext)
    
    return (
        < >
            {
                ( city ) && <CurrentForcast /> 
            }
            {
                ( city )? (
                    <div >
                    { 'Map the previous weather' }
                        <PreviousForcast />
                    </div>
                ):  <div >
                    <p >{ 'Welcome ' }</p>
                    </div>
            }
        </ >
    )
}

export default Main
