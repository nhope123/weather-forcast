import React, { useContext } from 'react'
import { useQueries } from 'react-query'
import { fetchPrevious } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'

const NullComponent = () => {

    const { coordinates, setPreviousForcast } = useContext( CityContext )
    console.log(`null load`);
    useQueries([
        { queryKey: [ 'day', 1], queryFn: ()=> fetchPrevious(coordinates, 1 ), onSuccess: data => setPreviousForcast( data ), retry: 1, retryDelay: 200, cacheTime: Infinity },
        { queryKey: [ 'day', 2], queryFn: ()=> fetchPrevious(coordinates, 2 ), onSuccess: data => setPreviousForcast( data ), retry: 1, retryDelay: 300, cacheTime: Infinity },
        { queryKey: [ 'day', 3], queryFn: ()=> fetchPrevious(coordinates, 3 ), onSuccess: data => setPreviousForcast( data ), retry: 1, retryDelay: 400, cacheTime: Infinity },
        { queryKey: [ 'day', 4], queryFn: ()=> fetchPrevious(coordinates, 4 ), onSuccess: data => setPreviousForcast( data ), retry: 1, retryDelay: 500, cacheTime: Infinity },
        { queryKey: [ 'day', 5], queryFn: ()=> fetchPrevious(coordinates, 5 ), onSuccess: data => setPreviousForcast( data ), retry: 1, retryDelay: 600, cacheTime: Infinity },
        
    ])

    return (
        < >
            
        </ >
    )
}

export default NullComponent
