// Weather.js

import React from 'react';
import SevenDayForecastTile from './SevenDayForecastTile';

// ... (existing imports)

export const Weather = () => {
  // ... (existing code)

  return (
    <div className="weatherPageStyle">
      {/* ... (existing code) */}
      <div className="sideContainer">
        <p>7-DAY FORECAST</p>
        {/* Use the SevenDayForecastTile component for each day */}
        {sevenDayForecastData.map((dayData, index) => (
          <SevenDayForecastTile
            key={index}
            day={dayData.day}
            image={dayData.image}
            weatherCondition={dayData.weatherCondition}
            degree={dayData.degree}
            isLastTile={index === sevenDayForecastData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
