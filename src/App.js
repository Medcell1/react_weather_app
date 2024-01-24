import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Weather } from './pages/weatherpagefolder/weatherpage';
import { Cities } from './pages/citypagefolder/citiespage';
import { NavBarProvider } from './context/navbarcontext';
import React, { useEffect } from 'react'
import { GeoLocationContextProvider } from './context/geoLocationContext';
import { WeatherProvider } from './context/weathercontext';

function App() {
  useEffect(() => {
  document.body.style.backgroundColor = "#0B121E";
}, []);

return (
  <div className="App">
    <NavBarProvider>
      <GeoLocationContextProvider>
        <WeatherProvider>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Weather/>} ></Route>
            <Route path='/cities' element={<Cities/>}></Route>
          </Routes>
        </Router>
        </WeatherProvider>
      </GeoLocationContextProvider>
    </NavBarProvider>
  </div>
);
}


export default App;
