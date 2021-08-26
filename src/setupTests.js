// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import {render} from  '@testing-library/react';
import React from 'react';
import CityContextProvider from './context/CityContextProvider';
import WeatherQueryClient from './context/WeatherQueryClient';
import AlertTemplate from './components/AlertTemplate';
import { Provider as AlertProvider } from 'react-alert';
import { alertOptions } from './App';

const QueryAndContext = ({ children }) => {
    return (
        <AlertProvider template={ AlertTemplate } { ...alertOptions }  >
            < WeatherQueryClient >
                <CityContextProvider >
                    { children }
                </CityContextProvider>
            </WeatherQueryClient>
        </AlertProvider>
    )
}

const customRender = ( ui, options ) =>
    render( ui, { wrapper: QueryAndContext, ...options } )

export * from '@testing-library/react'

export { customRender as render }