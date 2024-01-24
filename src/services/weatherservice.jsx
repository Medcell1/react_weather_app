import axios from 'axios';
import React from 'react'

export const getDailyTemp = async(country) => {
const WEATHER_API_KEY = 'cab6c40eb25f4279ae321641232212';
try {
   const response =  await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${country}&days=1&aqi=yes&alerts=no`);
   const extractedTemp = {};
   const hourlyData = await response.forecast.forecastday[0].hour;
  
   const targetTimes = [6, 9 , 12 , 15 , 18];
   hourlyData.forEach((hourData) => {
       const time =  new Date(hourData.time_epoch * 1000).getUTCHours();
       if(targetTimes.includes(time)) {
           extractedTemp[time] = hourData.temp_c;
       }
   });
   console.log(`extractedTemp====>${extractedTemp}`);
   return extractedTemp;
   

} catch (error) {
    console.error('Error fetching dailyweatherforecast:', error);
    return null;
}
}
