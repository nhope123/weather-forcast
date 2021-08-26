import React, { useContext, useState } from 'react'
import { CityContext } from '../context/CityContextProvider'
import { Search } from 'react-bootstrap-icons'

const placeholderText = 'Enter city name'

const LocationInput = () => {

    const [ location, setlocation ] = useState( '' )
    const { setCity }= useContext( CityContext )
    
    const submitlocation =  ( event ) =>{
        event.preventDefault()
        setCity( location )
        setlocation( '' )        
    }

    return (
        <div className={ 'position-relative d-block pb-5  px-sm-5 pt-2' } role={ 'search' } >
            <form onSubmit={ submitlocation } aria-label={ 'Search city weaather forecast' }
                  data-testid={ 'city-form' } >
                <input type={ 'search' } tabIndex={ '0' } value={ location } required
                       aria-placeholder={ placeholderText } placeholder={ placeholderText }
                       onChange={ event => setlocation( event.target.value ) } 
                       aria-label={ 'Search for the city' } data-testid={ 'city-input' } />
                { /* Search button */ }       
                <button title={ 'Submit '} type={ 'submit' } tabIndex={ '0' } 
                        disabled={ (location.length < 1) } >
                    <Search />
                </button>
            </form>            
        </div>
    )
}

export default LocationInput
