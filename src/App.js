import React from 'react'
import { defaultClassname } from './assets/helper_functions'
import Header from './components/Header'
import LocationInput from './components/LocationInput'
import Main from './components/Main'
import CityContextProvider from './context/CityContextProvider'
import WeatherQueryClient from './context/WeatherQueryClient'



const App = () => {
  return (
    < WeatherQueryClient >
      <CityContextProvider >

        <div className={ `${ defaultClassname } flex-column justify-content-start align-items-center py-5 px-3 bg-purple vw-100 min-vh-100 ` } 
             role={'main'} aria-labelledby={'title'}>
          <Header />
          <LocationInput />
          <Main />
        </div>        

      </CityContextProvider>      
    </WeatherQueryClient >
  )
}


export default App;
