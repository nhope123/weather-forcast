import React, { createContext, useState } from 'react'

export const CityContext = createContext()
 
const CityContextProvider= ( props ) => {

    const [city, setCity] = useState()
    const [currentForcast, setCurrentForcast] = useState('')
    const [previousForcast, setPreviousForcast] = useState('')
    return (
        <CityContext.Provider value={ {
            city, setCity, 
            currentForcast, setCurrentForcast,
            previousForcast, setPreviousForcast
            } } >
            { props.children }
        </CityContext.Provider>
    )
}

export default CityContextProvider
