import React from 'react'
import { defaultClassname } from './assets/helper_functions'
import LocationInput from './components/LocationInput'
import Main from './components/Main'
import CityContextProvider from './context/CityContextProvider'
import WeatherQueryClient from './context/WeatherQueryClient'



const App = () => {
  return (
    < WeatherQueryClient >
      <CityContextProvider >

        <div className={ `${ defaultClassname } flex-column justify-content-start align-items-center py-5 px-3 bg-purple vw-100 min-vh-100` } >
          <h1 className={ 'mb-4 fw-bold '} >{"Weather Forcast"}</h1 >
          <LocationInput />
          <Main />
        </div>        

      </CityContextProvider>      
    </WeatherQueryClient >
  )
}


export default App;
