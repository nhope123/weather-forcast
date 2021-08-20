import React, { useState } from 'react'

const placeholderText = 'Enter city name'
/**
 * Form for user location input
 * @returns 
 */

const LocationInput = () => {
    const [location, setlocation] = useState( '' )

    const submitlocation = (event) =>{
        event.preventDefault()

        setlocation( '' )
    }
    return (
        <div>
            <form onSubmit={ submitlocation } >
                <input type={ 'search' } tabIndex={ '0' } value={location} 
                       required aria-placeholder={ placeholderText } placeholder={ placeholderText}
                       onChange={ event => setlocation( event.target.value)} />
                <button type={ 'submit' } tabIndex={ '0' } disabled={ (location.length < 1)} >{ 'Enter' }</button>
            </form>
            
        </div>
    )
}

export default LocationInput
