import React, { useContext, useEffect } from 'react'
import { defaultClassname } from '../assets/helper_functions'
import { CityContext } from '../context/CityContextProvider'

const PreviousForcast = ( props ) => {

   const { previousForcast } = useContext( CityContext )

    useEffect(() => { }, [previousForcast])
    return (
        < >
            {
                (previousForcast.length >= 5 ) && (
                    <div className={ `${ defaultClassname } flex-column justify-content-center align-items-center my-2` }>

                        {/* date / day */}
                        <div >{ props.date }</div>

                        {/* Temperature */}
                        <div >{ props.temp }</div>

                        {/* description */}
                        <div className={`${ defaultClassname } flex-row justify-content-center ` } >
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
