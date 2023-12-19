import React, { useState } from "react";
import './Weather.css';
import search_icon from '../weather/Assest/search.png'
import cloud_icon from '../weather/Assest/cloud.png'
import humidity_icon from '../weather/Assest/humidity.png'
import wind_icon from '../weather/Assest/wind.png'
import clear_icon from '../weather/Assest/clear.png'
import drizzle_icon from '../weather/Assest/drizzle.png'
import rain_icon from '../weather/Assest/rain.png'
import snow_icon from '../weather/Assest/snow.png'


const WeatherApp =  () =>{

    const[wicon,setIcon]=useState(cloud_icon)
    let apikey="5698c010fde3e2a2c6b59bc08ef39535";
    
    const search = async () =>{
        

        const element=document.getElementsByClassName("citysearch");
       
        if(element[0].value===""){
            // console.log('test')
            return 0;
        }

        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`;

        let response= await fetch(url);
        let data=await response.json();
        const humidity=document.getElementsByClassName("humidity-percent");
        const wind=document.getElementsByClassName("wind-rate");
        const temperature=document.getElementsByClassName("temp");
        const loc=document.getElementsByClassName("location");

        humidity[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML=Math.floor(data.wind.speed)+" km/h";
        temperature[0].innerHTML=Math.floor(data.main.temp)+"°C";
        loc[0].innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setIcon(clear_icon)
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setIcon(cloud_icon)
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setIcon(drizzle_icon)
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setIcon(drizzle_icon)
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setIcon(rain_icon)
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setIcon(rain_icon)
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setIcon(snow_icon)
        }
        else{
            setIcon(clear_icon)
        }
    }

    return <div>
        <div className="container">
            <div className="topclass">
                <input type="text" className="citysearch" placeholder="search your city" />
                <div className="search_icon" onClick={()=>{search()}}>
                    <img src={search_icon} />
                </div>
            </div>

            <div className="weather-image">
                <img src={wicon} />
            </div>

            <div className="temp"></div>
            <div className="location"></div>

            <div className="data">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data-down">
                    <div className="humidity-percent"></div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data-down">
                    <div className="wind-rate"></div>
                    <div className="text">Wind</div>
                </div>
            </div>
            </div>
        </div>

    </div>
}
export default WeatherApp;