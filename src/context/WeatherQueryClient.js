import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


const WeatherQueryClient = ( props ) => {
    return (
        <QueryClientProvider client={ queryClient }>
            { props.children }
        </QueryClientProvider >
    )
}

export default WeatherQueryClient
