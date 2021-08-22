import React, { useContext, useState } from 'react'
import { CityContext } from '../context/CityContextProvider'
import { Search } from 'react-bootstrap-icons'

const placeholderText = 'Enter city name'

const LocationInput = () => {
    const [location, setlocation] = useState( '' )

    const { setCity }= useContext( CityContext )
    
    const submitlocation =  (event) =>{
        event.preventDefault()
        setCity( location )
        setlocation( '' )
        
    }
    return (
        <div className={ 'position-relative d-block mb-5 ' } >
            <form onSubmit={ submitlocation } >
                <input type={ 'search' } tabIndex={ '0' } value={location} 
                       required aria-placeholder={ placeholderText } placeholder={ placeholderText}
                       onChange={ event => setlocation( event.target.value)} />
                <button className={ 'px-2 search-button '}
                        type={ 'submit' } tabIndex={ '0' } disabled={ (location.length < 1)} >
                    <Search />
                </button>
            </form>
            
        </div>
    )
}

export default LocationInput
