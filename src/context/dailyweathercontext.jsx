import React, { createContext } from 'react'
export const DailyWeatherContext = createContext();
const API_KEY = 'cab6c40eb25f4279ae321641232212';
const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${longitude},${longitude}&days=1&aqi=yes&alerts=no`);

export const DailyWeatherContextProvider = ({children}) => {
  return (
   <DailyWeatherContext.Provider>{children}</DailyWeatherContext.Provider>
  )
}
