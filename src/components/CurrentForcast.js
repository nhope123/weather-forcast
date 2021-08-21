import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { fetchData } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'


const CurrentForcast = () => {
    
    const { city } = useContext( CityContext )
    
    const {data, error, status } = useQuery( 'weather',()=> fetchData( city))
    
    console.log( status );
    console.log( data);
    console.log('help');
    return (
        <div>
            <div >
                <h2 >{ city }</h2>
            </div>

        </div>
    )
}

export default CurrentForcast
