import React, { createContext, useState } from 'react'

export const CityContext = createContext()
 
const CityContextProvider= ( props ) => {

    const [city, setCity] = useState('')
    const [coordinates, setCoordinates] = useState('')
    const [previousForcast, setForcast] = useState([])

    const setPreviousForcast = anObject =>{
        if(previousForcast.length < 1 || previousForcast.length >= 5 ){ setForcast( [ anObject]) }
        else{
            const forcast = [ ...previousForcast, anObject].sort((a,b)=> a.current.dt - b.current.dt)
            setForcast(forcast)
        }        
    }

    const getCoordinates = anObject =>{
        setCoordinates( anObject)
        setForcast([])
    } 

    return (
        <CityContext.Provider value={ {
                city, setCity, 
                coordinates, getCoordinates,
                previousForcast, setPreviousForcast
            } } >
            { props.children }
        </CityContext.Provider>
    )
}

export default CityContextProvider
