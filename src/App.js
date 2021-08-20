import React from 'react'
import CurrentForcast from './components/CurrentForcast'
import LocationInput from './components/LocationInput'
import PreviousForcast from './components/PreviousForcast'

const App = () => {
  return (
    <div>
      <h1 >{"Weather Forcast"}</h1 >
      <LocationInput />
      <CurrentForcast />
      <div >
        {'Map the previous weather'}
        <PreviousForcast />
      </div>
    </div>
  )
}


export default App;
