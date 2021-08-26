import React, { createContext, useState } from 'react'
import { useQueries, useQuery } from 'react-query'
import { processForecastHistory, processLocalForecast } from '../assets/dataProcessing'
import { useAlert } from 'react-alert'
import { fetchCurrentForecast, fetchHistoryForecast } from '../assets/dataFetching'


export const CityContext = createContext()
const cacheValue = 3600000 // 1hr
 
const CityContextProvider= ( props ) => {

    const [ city, setCity ] = useState( '' )
    const [ coordinates, setCoordinates ] = useState( '' )
    const [ previousForecast, setPreviousForecast ] = useState( [] )
    const [ currentForecast, setCurrentForecast ] = useState( '' )
    const [ isFirstLoad, setIsFirstLoad ] = useState( true )

    const alert = useAlert()

    const getForecastHistory = anObject =>{
        if( previousForecast.length < 1 ) { 
            setPreviousForecast( [ processForecastHistory( anObject ) ] ) 
        }
        else if( previousForecast.length < 4 ) { 
            setPreviousForecast( [ ...previousForecast, 
                                   processForecastHistory( anObject )  
                                ] ) }
        else if( previousForecast.length === 4 ){
            setPreviousForecast( [ ...previousForecast, 
                                   processForecastHistory( anObject ) ].sort(
                                                                            ( a, b )=> a.key - b.key 
                                                                            ) )
            setCoordinates( '' )
            setIsFirstLoad( false )
        }                
    }

    const getLocalForecast = anObject =>{        
        setCoordinates( anObject.coord )
        setCurrentForecast( processLocalForecast( anObject ))
        setPreviousForecast( [] )
        setCity( '' )        
    } 

    useQuery( 'weather',()=> fetchCurrentForecast( city ), { 
        onSuccess: data=> getLocalForecast( data ),
        onError: data => {
                            alert.error( data.response.data.message )
                            setCity( '' )
                        },
        cacheTime: cacheValue,
        enabled: ( city.length > 0 ),    
    })
    
    useQueries(
        [1,2,3,4,5].map( day =>{
            const date = ( day === 1 )? '1st': (day === 2)? '2nd' : ( day + 'th' )
            return {
                queryKey: [ 'day', day ],
                queryFn: ()=> fetchHistoryForecast( coordinates, day ),
                onSuccess: data => getForecastHistory( data ),
                onError: data => {
                                    alert.error( `${ date } day: ${data.response.data.message}` )
                                    setCity( '' )
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
                coordinates, getLocalForecast,
                currentForecast, setCurrentForecast,
                previousForecast, getForecastHistory,
                isFirstLoad, setIsFirstLoad
            } } >
            { props.children }
        </CityContext.Provider>
    )
}

export default CityContextProvider
