import React from 'react';

const Weather = ({ weatherData }) => (
    <nav>
        <ul>
            <li>
                {weatherData.main.feels_like}
            </li>
            <li>   
                {weatherData.main.humdity}
            </li>
            <li>
                {weatherData.weather[0].main}
            </li>
        </ul>
    </nav>
)

export default Weather