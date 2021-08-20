import React from 'react'

const PreviousForcast = () => {
    return (
        <div>
            <div >
                <img src={ '' } alt={ `weather description`} />
            </div>
            <div >

                {/* date / day */}
                <span >{ 'Sun' }</span>
                {/* Temperature */}
                <span >{ '90deg' }</span>
            </div>
        </div>
    )
}

export default PreviousForcast
