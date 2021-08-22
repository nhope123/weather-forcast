import React, { createContext, useState } from 'react'
import { useQueries, useQuery } from 'react-query'
import { fetchCurrentForcast, fetchHistoryForcast, processForcastHistory, processLocalForcast } from '../assets/helper_functions'

export const CityContext = createContext()
 
const CityContextProvider= ( props ) => {

    const [city, setCity] = useState('')
    const [coordinates, setCoordinates] = useState('')
    const [previousForcast, setPreviousForcast] = useState([])
    const [currentForcast, setCurrentForcast] = useState('')
    const [isFirstLoad, setIsFirstLoad] = useState( true )

    const getForcastHistory = anObject =>{
        if(previousForcast.length < 1 ) { setPreviousForcast( [ processForcastHistory( anObject ) ] ) }
        else if( previousForcast.length < 4 ) { setPreviousForcast( [ ...previousForcast, processForcastHistory( anObject )  ] ) }
        else if( previousForcast.length === 4 ){
            setPreviousForcast( [ ...previousForcast, processForcastHistory( anObject ) ].sort((a,b)=> a.key - b.key) )
            setCoordinates('')
            setIsFirstLoad( false )
        }        
    }

    const getLocalForcast = anObject =>{
        
        setCoordinates( anObject.coord)
        setCurrentForcast( processLocalForcast( anObject ))
        setPreviousForcast([])
        setCity( '' )
        
    } 

    useQuery( 'weather',()=> fetchCurrentForcast( city), { 
        onSuccess: data=> getLocalForcast( data ),
        cacheTime: Infinity,
        enabled: (city.length > 0),    
    })

    useQueries([
        { queryKey: [ 'day', 1], queryFn: ()=> fetchHistoryForcast(coordinates, 1 ), onSuccess: data => getForcastHistory( data ), retry: 1, enabled: ( typeof coordinates  === 'object' ) },
        { queryKey: [ 'day', 2], queryFn: ()=> fetchHistoryForcast(coordinates, 2 ), onSuccess: data => getForcastHistory( data ), retry: 1, enabled: ( typeof coordinates  === 'object' ) },
        { queryKey: [ 'day', 3], queryFn: ()=> fetchHistoryForcast(coordinates, 3 ), onSuccess: data => getForcastHistory( data ), retry: 1, enabled: ( typeof coordinates  === 'object' ) },
        { queryKey: [ 'day', 4], queryFn: ()=> fetchHistoryForcast(coordinates, 4 ), onSuccess: data => getForcastHistory( data ), retry: 1, enabled: ( typeof coordinates  === 'object' ) },
        { queryKey: [ 'day', 5], queryFn: ()=> fetchHistoryForcast(coordinates, 5 ), onSuccess: data => getForcastHistory( data ), retry: 1, enabled: ( typeof coordinates  === 'object' ) },
        
    ])






    return (
        <CityContext.Provider value={ {
                city, setCity, 
                coordinates, getLocalForcast,
                currentForcast, setCurrentForcast,
                previousForcast, getForcastHistory,
                isFirstLoad, setIsFirstLoad
            } } >
            { props.children }
        </CityContext.Provider>
    )
}

export default CityContextProvider
