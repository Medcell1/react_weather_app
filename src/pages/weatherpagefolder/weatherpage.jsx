import React, { useContext, useEffect, useState } from 'react';

import './weatherPage.css'
import sunImage from '../../assets/sun.png';
import { TodayForeCastItem } from '../../components/todayforecastItems';
import { TODAYFORECASTITEMS } from '../../constants/todayforecastitems';
import { AIRCONDITIONITEMS } from '../../constants/airconditionconstants';
import { AirConditionItem } from '../../components/airconditionItem';
import { GeolocationContext } from '../../context/geoLocationContext';
import { getCountryFromCoords } from '../../services/geocode';
import { useWeather } from '../../context/weathercontext';
export const Weather = () => {
  const { latitude, longitude } = useContext(GeolocationContext);
  const { currentDegree, dailyWeatherForecast, region, realFeel, windDirection, currentWeatherConditionIcon, uvIndex, windSpeed, dailyWeatherConditionIcons } = useWeather();
  console.log({ latitude, longitude });  
  const AirConditionMeasures = [
    realFeel,
    windDirection,
   windSpeed,
    uvIndex,
  ]

 
  return (
    <div className='weatherPageStyle'>
      <div className='weatherContents' >
        <div className='searchBar'><p>Search for cities</p></div>
        <div className='firstContainer'>
          <div className='firstContainerRight'>
            <h1>{region}</h1>
            <p>Chance of rain: 0%</p>
            <h1>{currentDegree}°C</h1>
          </div>
          <img src={sunImage} width={200} height={200} />
        </div>
        <div className='todaysforecast'>
          <p>TODAY'S FORECAST</p>
          <div className='forecastItems'>
            {Object.entries(dailyWeatherForecast).map(function([time, degree], index) {
               return (
                <TodayForeCastItem
                  key={index}
                  index={index}
                  image={dailyWeatherConditionIcons}
                  time={`${time}`}
                  degree={`${degree}°`}
                  isLastItem={index === Object.keys(dailyWeatherForecast).length - 1}
                />
              )
            })}


          </div>

        </div>
        <div className='airConditions'>
          <div className='airConditionFirstRow'>
            <p>AIR CONDITIONS</p>
            <button className='airConditionButton'>See More</button>
          </div>
          <div className='airConditionItems'>
            {AIRCONDITIONITEMS.map(function (item , index) {  
              
                return <AirConditionItem text={item.text} icon={item.icon} measure={item.index===3 ? `${AirConditionMeasures[index]} km/h` : AirConditionMeasures[index] }></AirConditionItem>
         
              
            },)}
          </div>
          <div className='weatherPageSideBar'></div>
        </div>


      </div>
      <div className='sideContainer'>
        <p>7-DAY FORECAST</p>
      </div>
    </div>

  )
}
