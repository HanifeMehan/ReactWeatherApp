import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState("İstanbul")
    const [weatherInfo, setWeatherInfo] = useState()
    
    useEffect(() => {
        const api = "aef2a85fe3250c69709ee5b4c3a1df8a"
        const baseURL =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${api}&cnt=40` 
        if (city) {
        axios(baseURL)
        .then(res => {
            const dailyWeatherData = res.data.list.filter((data, index) => index % 8 === 0);
            setWeatherInfo(dailyWeatherData);
          })
          .catch((e) => alert("Please Enter valid City Name"))
        
    }
    },[city])
    
    
    const values = {
        city,
        setCity,
        weatherInfo,
        setWeatherInfo,
        
    }


    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);