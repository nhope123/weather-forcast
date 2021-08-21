import React from 'react'
import LocationInput from './components/LocationInput'
import Main from './components/Main'
import CityContextProvider from './context/CityContextProvider'
import WeatherQueryClient from './context/WeatherQueryClient'



const App = () => {
  return (
    < WeatherQueryClient >
      <CityContextProvider >

        <div className={ 'd-flex flex-column justify-content-start align-items-center py-5 px-3 border border-primary vw-100 vh-100' } >
          <h1 className={ 'mb-4 '} >{"Weather Forcast"}</h1 >
          <LocationInput />
          <Main />
        </div>        

      </CityContextProvider>      
    </WeatherQueryClient >
  )
}


export default App;
