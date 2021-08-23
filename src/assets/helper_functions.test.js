const helper_functions = require("./helper_functions")

/** prcessForecasthistory */
// @ponicode
describe("helper_functions.processForecastHistory", () => {
    test("Complete data Should return formated object", () => {
        let object = [{ description: "Looking for collector with description ", icon: "https://cdn.fakercloud.com/avatars/akmalfikri_128.jpg", main: "pdf" }]
        let result = helper_functions.processForecastHistory({ current: { temp: "23", weather: object, dt: "1629718177" } })
        expect(result).toEqual({ temp: "23°C", main: "pdf", desc: "Looking for collector with description ", icon: "http://openweathermap.org/img/wn/https://cdn.fakercloud.com/avatars/akmalfikri_128.jpg@2x.png", date: "Mon 23", key: "1629718177" })
    })

    test("No data should throw error", () => {
        let callFunction = () => {
            helper_functions.processForecastHistory(undefined)
        }
    
        expect(callFunction).toThrow("Cannot read property 'current' of undefined")
    })

    test("Missing data should throw error", () => {
        let callFunction = () => {
            helper_functions.processForecastHistory({ current: { temp: "", weather: [], dt: "" } })
        }
    
        expect(callFunction).toThrow("Cannot read property 'main' of undefined")
    })
})

// @ponicode
describe("helper_functions.processLocalForecast", () => {
    test("Missing data should throw error", () => {
        let callFunction = () => {
            helper_functions.processLocalForecast({ weather: [], main: {}, dt: "", sys: {}, name: "" })
        }
    
        expect(callFunction).toThrow()
    })

    test("No data should throw error", () => {
        let object = [{ main: "m2v", icon: "https://cdn.fakercloud.com/avatars/akmalfikri_128.jpg", description: "This is group1" }]
        let result = helper_functions.processLocalForecast({ weather: object, main: { temp_min: 21, temp: 19, temp_max: 30, feels_like: "Edmond" }, dt: 1587927737, sys: { sunrise: 15712999, sunset: 1539137, country: "China" }, name: "Edmond" })
        expect(result).toEqual({ name: "Edmond", country: "China", date: "Sun, Apr 26, 3:17pm", temp: "19°C", icon: "http://openweathermap.org/img/wn/https://cdn.fakercloud.com/avatars/akmalfikri_128.jpg@2x.png", desc: "This is group1", main: "m2v", sunrise: 15712999, sunset: 1539137, feel: "NaN°C", temp_min: "21°C", temp_max: "30°C" })
    })

    test("Complete data Should return formated object", () => {
        let callFunction = () => {
            helper_functions.processLocalForecast({})
        }
    
        expect(callFunction).toThrow()
    })
})

// @ponicode
describe("helper_functions.calculateDay", () => {
    test("0", () => {
        let result = helper_functions.calculateDay(undefined)
        expect(result).not.toBeTruthy()
        expect(result).toBe(NaN)
    })

    test("1", () => {
        let result = helper_functions.calculateDay("")
        expect(result).toBeTruthy()
    })

    test("2", () => {
        let result = helper_functions.calculateDay(300)
        expect(result).toBeTruthy()
    })

    test("3", () => {
        let callFunction = () => {
            helper_functions.calculateDay(4)
        }
    
        expect(callFunction).not.toThrow()
    })
})