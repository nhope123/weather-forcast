import React, { useContext } from 'react'
import { useQueries, useQuery } from 'react-query'
import { fetchPrevious } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'

const PreviousForcast = () => {

    const {coordinates} = useContext( CityContext )

    const {data, error} = useQuery('box', ()=> fetchPrevious(coordinates, 4 ))
    /*const results =  useQueries([
        { queryKey: [ 'day', 1], queryFn: ()=> fetchPrevious({ lat: coordinates.lat, lon: coordinates.lon }, 1 ) },
        { queryKey: [ 'day', 2], queryFn: ()=> fetchPrevious({ lat: coordinates.lat, lon: coordinates.lon }, 2 ) },
        { queryKey: [ 'day', 3], queryFn: ()=> fetchPrevious({ lat: coordinates.lat, lon: coordinates.lon }, 3 ) },
        { queryKey: [ 'day', 4], queryFn: ()=> fetchPrevious({ lat: coordinates.lat, lon: coordinates.lon }, 4 ) },
        { queryKey: [ 'day', 5], queryFn: ()=> fetchPrevious({ lat: coordinates.lat, lon: coordinates.lon }, 5 ) },
        
    ])*/

    console.log(data);
    console.log(`error: ${error}`);
    return (
        < >
            {
                (coordinates ) && (
                    <div className={ 'position-relative d-flex flex-column justify-content-center align-items-center border border-primary'}>

                        {/* date / day */}
                        <div >{'Sun'}</div>

                        {/* description */}
                        <div >
                            <img src={ '' } alt={ `weather description`} />
                            <div className={'text-center'} >{'Description'}</div>
                        </div>

                        {/* Temperature */}
                        <div >{` 26°C`}</div>

                    </div>
                )
            }
            
        </ >
    )
}

export default PreviousForcast
