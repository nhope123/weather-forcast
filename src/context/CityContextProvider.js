import React, { createContext, useState } from 'react'
import { useQueries, useQuery } from 'react-query'
import { fetchCurrentForcast, fetchHistoryForcast, processForcastHistory, processLocalForcast } from '../assets/helper_functions'
import { useAlert } from 'react-alert'


export const CityContext = createContext()
const cacheValue = 3600000 // 1hr
 
const CityContextProvider= ( props ) => {

    const [city, setCity] = useState('')
    const [coordinates, setCoordinates] = useState('')
    const [previousForcast, setPreviousForcast] = useState([])
    const [currentForcast, setCurrentForcast] = useState('')
    const [isFirstLoad, setIsFirstLoad] = useState( true )

    const alert = useAlert()

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
        onError: data => {
                            alert.error(data.response.data.message)
                            setCity('')
                        },
        cacheTime: cacheValue,
        enabled: (city.length > 0),    
    })
    
    useQueries(
        [1,2,3,4,5].map( day =>{
            const date = (day === 1)? '1st': (day === 2)? '2nd' : (day + 'th')
            return {
                queryKey: [ 'day', day ],
                queryFn: ()=> fetchHistoryForcast(coordinates, day ),
                onSuccess: data => getForcastHistory( data ),
                onError: data => {
                                    alert.error(`${ date } day: ${data.response.data.message}`)
                                    setCity('')
                                },
                retry: 1, 
                cacheTime: cacheValue,
                enabled: ( typeof coordinates  === 'object' )
            }
        } )
    )

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
