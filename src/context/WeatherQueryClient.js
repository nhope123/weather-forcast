import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()


const WeatherQueryClient = ( props ) => {
    return (
        <QueryClientProvider client={ queryClient }>
            <ReactQueryDevtools initialIsOpen={false} />
            { props.children }
        </QueryClientProvider >
    )
}

export default WeatherQueryClient
