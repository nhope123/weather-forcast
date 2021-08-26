import React from 'react'
import { InfoCircle } from 'react-bootstrap-icons'

// the style contains only the margin given as offset
// options contains all alert given options
// message is the alert message
// close is a function that closes the alert
const AlertTemplate = ({ message }) =>{
    return (
        <div className={'.alert'} style={{backgroundColor: 'rgba(255,255,255,0.4)',borderRadius: '10px',padding: '10px 15px',marginTop: '15px'}}>
            <InfoCircle style={{color: 'red',fontSize: '1.5rem', marginRight: '10px'}} />
            <span style={{color: 'black',fontSize: '1.5rem'}} >{message}</span>
        </div >       
    )
}

export default AlertTemplate
