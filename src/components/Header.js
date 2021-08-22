import React from 'react'

const Header = () => {
    return (
        <header >
            <h1 id={'title'} className={ 'mb-4 fw-bold '} >
              <a href={ 'https://github.com/nhope123/weather-forcast' } tabIndex={ '0' } target={'_top'} title={'Go to Repository'} >
                {"Weather Forcast"}
              </a>
            </h1 >
        </header>
    )
}

export default Header
