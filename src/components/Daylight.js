import dayjs from 'dayjs'
import React from 'react'
import { Sunrise, Sunset } from 'react-bootstrap-icons'
import { defaultClassname } from '../assets/helper_functions'
import { padding } from './CurrentForcast'

const fontSize = 'fs-1'

const Daylight = ( props ) => {
    return (
        <div className={`${ defaultClassname } flex-column align-items-center justify-content-end ${ padding }`} >
            {
                ( props.time === 'sunrise')? <Sunrise className={`${ fontSize } `} style={{color: '#0073e6'}} />:
                                             <Sunset className={`${ fontSize } `} style={{color: '#ff5e4b'}} />
            }            
            
            <div >{ dayjs.unix( props.data ).format('h:mm a')  }</div>
        </div>
    )
}

export default Daylight
