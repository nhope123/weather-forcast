import dayjs from 'dayjs'
import React from 'react'
import { Sunrise, Sunset } from 'react-bootstrap-icons'

const Daylight = ( props ) => {
    return (
        <div className={'position-relative d-flex flex-column align-items-center justify-content-end p-2'} >
            {
                ( props.time === 'sunrise')? <Sunrise className={'fs-2'} style={{color: 'yellow'}} />:
                                             <Sunset className={'fs-2'} style={{color: 'orange'}} />
            }            
            
            <div >{ dayjs.unix( props.data ).format('h:mm a')  }</div>
        </div>
    )
}

export default Daylight