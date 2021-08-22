import React, { useContext, useEffect } from 'react'
import { useQueries } from 'react-query'
import { fetchPrevious } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'

const NullComponent = () => {

    const { coordinates, setPreviousForcast } = useContext( CityContext )
    
    useQueries([
        { queryKey: [ 'day', 1], queryFn: ()=> fetchPrevious(coordinates, 1 ), onSuccess: data => setPreviousForcast( data ), retry: 1 },
        { queryKey: [ 'day', 2], queryFn: ()=> fetchPrevious(coordinates, 2 ), onSuccess: data => setPreviousForcast( data ), retry: 1 },
        { queryKey: [ 'day', 3], queryFn: ()=> fetchPrevious(coordinates, 3 ), onSuccess: data => setPreviousForcast( data ), retry: 1 },
        { queryKey: [ 'day', 4], queryFn: ()=> fetchPrevious(coordinates, 4 ), onSuccess: data => setPreviousForcast( data ), retry: 1 },
        { queryKey: [ 'day', 5], queryFn: ()=> fetchPrevious(coordinates, 5 ), onSuccess: data => setPreviousForcast( data ), retry: 1 },
        
    ])

    useEffect(() => {
        //console.log(`Null coordinates: ${ JSON.stringify(coordinates)}`);
     }, [coordinates, setPreviousForcast])
    return ( < > </ >  )
}

export default NullComponent
