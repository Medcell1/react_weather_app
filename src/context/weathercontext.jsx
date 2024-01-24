import React, { createContext, useState, useContext, useEffect } from 'react'
import { GeolocationContext } from './geoLocationContext';
import axios from 'axios';
export const WeatherContext = createContext(
    {
        dailyWeatherForecast: [],
        currentDegree: null,
    }
);
export const WeatherProvider = ({children}) => {
    const [dailyWeatherForecast, setDailyWeatherForecast] = useState([]);
    const [currentDegree, setCurrentDegree] = useState(null);
  
    const [region, setRegion] = useState(null);
    const API_KEY = 'cab6c40eb25f4279ae321641232212';
    const [uvIndex , setUvIndex] = useState(null);
    const [windDirection , setWindDirection] = useState(null);
    const [sevenDayForecast, setSevenDayForecast] = useState([]);

    const [windSpeed, setWindSpeed] = useState(null);
    const[currentWeatherCondition , setcurrentWeatherCondition] = useState(null);
    const[realFeel , setRealFeel] = useState(null);
    const [dailyWeatherConditionIcons, setdailyWeatherConditionIcons] = useState([]);
    const { latitude, longitude } = useContext(GeolocationContext);



    const getWeatherDetails = async () => {
        try {
            console.log(`Lon: ${longitude}`)
            console.log(`Lat: ${latitude}`)

           
         const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`);
          
         
         //getRegion
        const region = await response.data.location.name;
           if(region !== null) {
            setRegion(region);
           }


           //get Current Degree
           const currentDegreeData = await response.data.current.temp_c;
            if (currentDegreeData !== null) {
                setCurrentDegree(currentDegreeData);
            }


            //dailyWeatherForecast
            const extractedTemp = {};
            const dailyWeatherConditionIcons = [];
            const hourlyData = await response.data.forecast.forecastday[0].hour;

        if(hourlyData!==null) {
            hourlyData.forEach((hourData) => {
                const targetTimes = ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
                console.log(`formattedTemp====>>>${hourData.time}`);
                const timeString = hourData.time;
                targetTimes.forEach((myTargetTime) => {
                    if (timeString.includes(myTargetTime)) {
                        extractedTemp[myTargetTime] = hourData.temp_c;
                        dailyWeatherConditionIcons.push(hourData.condition.icon);
                    
                    }
                });
            
                setdailyWeatherConditionIcons(dailyWeatherConditionIcons);        
                setDailyWeatherForecast(extractedTemp);
            });
        }


        //get Air Conditions(Uv Index)
        const uvIndexData = await response.data.current.uv;
        setUvIndex(uvIndexData);


          //get Air Conditions(Wind Speed)
          const windSpeedData = await response.data.current.wind_kph;
          setWindSpeed(windSpeedData);


            //get Air Conditions(Real Feel)
        const realFeelData = await response.data.current.feelslike_c;
        setRealFeel(realFeelData);


          //get Air Conditions(Chance of rain)
          const windDirectionData = await response.data.current.wind_dir;
          setWindDirection(windDirectionData);
          

          //getCurrentWeatherConditions
          const  currentWeatherConditionData = await response.data.current.condition.text;
          setcurrentWeatherCondition(currentWeatherConditionData);

   
        

        
        } catch (error) {
            console.log(`error from getCurrentDegree: ${error}`);
        }
    }
 
    useEffect(() => {
        const fetchData = async () => {
            await getWeatherDetails();
           
        };
        fetchData();
    }, [longitude, latitude]);

    const contextValue = { region, dailyWeatherForecast, currentDegree, realFeel, uvIndex, currentWeatherCondition, windDirection, windSpeed, dailyWeatherConditionIcons };
    return (
        <WeatherContext.Provider value={contextValue}>{children}</WeatherContext.Provider>
    )
}
export const useWeather = () => {
    return useContext(WeatherContext);
};
