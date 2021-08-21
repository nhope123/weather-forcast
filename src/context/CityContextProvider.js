import React, { createContext, useState } from 'react'

export const CityContext = createContext()
 
const CityContextProvider= ( props ) => {

    const [city, setCity] = useState('toronto')
    const [coordinates, setCoordinates] = useState('')
    const [previousForcast, setPreviousForcast] = useState('')
    return (
        <CityContext.Provider value={ {
            city, setCity, 
            coordinates, setCoordinates,
            previousForcast, setPreviousForcast
            } } >
            { props.children }
        </CityContext.Provider>
    )
}

export default CityContextProvider
