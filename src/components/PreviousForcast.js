import React, { useContext } from 'react'
import { CityContext } from '../context/CityContextProvider'

const PreviousForcast = ( props ) => {

   const {coordinates , previousForcast} = useContext( CityContext )

    return (
        < >
            {
                (previousForcast.length >= 5 ) && (
                    <div className={ 'position-relative d-flex flex-column justify-content-center align-items-center my-2 '}>

                        {/* date / day */}
                        <div >{ props.date }</div>

                        {/* Temperature */}
                        <div >{ props.temp }</div>

                        {/* description */}
                        <div className={'position-relative d-flex flex-row justify-content-center '} >
                            <img src={ props.icon } className={'w-50 '}
                                 alt={ props.desc } />
                            <div className={'text-center'} >{ props.main }</div>
                        </div>

                    </div>
                )
            }
            
        </ >
    )
}

export default PreviousForcast
