import React from 'react'
import "./Weather.css";
import axios from "axios";

const Weather = () => {
    const [weather, setWeather] = React.useState();
    

  return (
    <div>
        <input 
        type="number"
        id="zipcode"
        />
        <button>Get Weather</button>
    </div>
  )
}

export default Weather