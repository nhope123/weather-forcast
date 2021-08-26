import { render, fireEvent, screen} from '../../setupTests';
import userEvent from '@testing-library/user-event'
import {getRoles,waitFor, logRoles} from '@testing-library/dom'
import LocationInput from '../LocationInput';
import Main from '../Main';



jest.mock('../../assets/helper_functions', ()=>({
    _esModule: true,
    fetchCurrentForecast: jest.fn( (city)=> {
       return (city === 'toronto')? ({
            name: "Toronto",
            dt: 1629822425,
            sys:{
                country: "CA",
                sunrise: 1629801164,
                sunset: 1629850055
            },
            main:{
                temp: 29,
                temp_max: 31,
                temp_min: 26,
                feels_like: 30
            },
            weather:[
               {    
                   
                   icon: "02d",
                   main: "Clouds",
                   description: "Cloudy" 
               } 
            ]
            
        }):(city === 'Kingstown')? ({
            name: 'Kingstown',
            dt: 1629822425,
            sys:{
                country: "VC",
                sunrise: 1629801164,
                sunset: 1629850055
            },
            main:{
                temp: 29,
                temp_max: 31,
                temp_min: 26,
                feels_like: 30
            },
            weather:[
               {    
                   
                   icon: "02d",
                   main: "Clouds",
                   description: "Cloudy" 
               } 
            ]
            
        }): ({ response:{ data:{ message: 'city not found' } } }) }),

    fetchHistoryForecast: jest.fn( (city, num)=>{ 
        const history =[
            {
                current:{
                    "temp": 5,
                    "dt": 'day5',
                    "weather": [
                        {
                            "main": "at turpis",
                            "description": "aliquet pulvinar",
                            "icon": "risus"
                        },                    
                    ]
                    }
            },
            {
               current:{
                   "temp": 11,
                    "dt": 'day4',
                    "weather": [
                        {
                            "main": "dictumst etiam",
                            "description": "ac",
                            "icon": "pede"
                        }
                    ]
               } 
            },{
                current:{
                    "temp": 19,
                    "dt": 'day3',
                    "weather": [
                        {
                            "main": "eu",
                            "description": "sapien a",
                            "icon": "felis"
                        }
                    ]
                }
            },
            {
                current:{
                    "temp": 32,
                    "dt": 'day2',
                    "weather": [
                        {
                            "main": "aliquam",
                            "description": "pretium quis",
                            "icon": "fermentum"
                        }
                    ]
                }
            }, 
            {
                current:{
                    "temp": 15,
                    "dt": 'day1',
                    "weather": [
                        {
                            "main": "purus",
                            "description": "ante",
                            "icon": "nam"
                        }
                    ]
                }
            }
        ]
    console.log( history[num -1]);
        return (city === 'toronto' || city === 'Kingstown')?  history[num -1]: ({ response:{ data:{ message: 'city not found' } } }) }),
    processForcastHistory: jest.fn( day => day ),
    processLocalForcast: jest.fn( data => data )
    
})        
)

jest.mock('axios', ()=>({
    _esModule: true,
    axios: jest.fn()
}))

describe('Input multiple city and display forecast', () => {
   
    
    test('should display Toronto city current and 5 day history forecast', async () => {
        render(< ><LocationInput /><Main /> </>)

        const userInput = screen.getByTestId('city-input')
        expect( userInput ).toBeInTheDocument()

        // test for city toronto
       userEvent.type( userInput, 'toronto' )
       expect(userInput).toHaveValue('toronto')
      await waitFor(()=> userEvent.click(screen.getByRole('button',{name:'Submit'})))
              
       //await waitFor(()=>expect( screen.getByRole('region',{name: 'current temperture'})).toBeInTheDocument())
        
        // test for city location 
        await waitFor(()=>expect( screen.getByTitle('Forecast location')).toHaveTextContent(/toronto,\sca/i))
        // City current temp
        await waitFor(()=>expect( screen.getByTestId('current temp')).toHaveTextContent(/^31/g))
        
        /* Forcast History */ 
        // Day 1
        await waitFor(()=>expect( screen.getByTestId('day1')).toBeInTheDocument())
        //await waitFor(()=>expect( screen.getByTestId('day1')).toHaveTextContent(/^30/i))
        // Day 2 
        await waitFor(()=>expect( screen.getByTestId('day2')).toBeInTheDocument())
        await waitFor(()=>expect( screen.getByTestId('day2')).toHaveTextContent(/^29/i))
        // Day 2
        await waitFor(()=>expect( screen.getByTestId('day3')).toBeInTheDocument())
        await waitFor(()=>expect( screen.getByTestId('day3')).toHaveTextContent(/^28/i))
        // Day 2
        await waitFor(()=>expect( screen.getByTestId('day4')).toBeInTheDocument())
        await waitFor(()=>expect( screen.getByTestId('day4')).toHaveTextContent(/^29/i))
        // Day 2
        await waitFor(()=>expect( screen.getByTestId('day5')).toBeInTheDocument())
        await waitFor(()=>expect( screen.getByTestId('day5')).toHaveTextContent(/^30/i))

    })

    test('should input multiple cities', async () => {
        render(< ><LocationInput /><Main /> </>)

        const userInput = screen.getByTestId('city-input')

        // test for city toronto
       userEvent.type( userInput, 'toronto' )
       expect(userInput).toHaveValue('toronto')
       userEvent.click(screen.getByRole('button',{name:'Submit'}))

       await waitFor(()=>expect( screen.getByRole('region',{name: 'current temperture'})).toBeInTheDocument())
        
       // test for city location 
       expect( screen.getByTitle('Forecast location')).toHaveTextContent(/toronto,\sca/i)
        // City current temp
        expect( screen.getByTestId('current temp')).toHaveTextContent(/^31/g)

         // test for city kingstown
         userEvent.type( userInput, 'Kingstown' )
         expect(userInput).toHaveValue('Kingstown')
         userEvent.click(screen.getByRole('button',{name:'Submit'}))
         await waitFor(()=>expect( screen.getByTitle('Forecast location')).toHaveTextContent(/Kingstown,/i))
         await waitFor(()=>expect( screen.getByTestId('current temp')).toHaveTextContent(/^26/g))
// 
        // test for city toronto
       userEvent.type( userInput, 'toronto' )
       expect(userInput).toHaveValue('toronto')
       userEvent.click(screen.getByRole('button',{name:'Submit'}))

       await waitFor(()=>expect( screen.getByRole('region',{name: 'current temperture'})).toBeInTheDocument())
        
       // test for city location 
       await waitFor(()=>expect( screen.getByTitle('Forecast location')).toHaveTextContent(/toronto,\sca/i))
       await waitFor(()=>expect( screen.getByTestId('current temp')).toHaveTextContent(/^31/g))
    })
    
    
})
