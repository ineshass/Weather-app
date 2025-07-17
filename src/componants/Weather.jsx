import { useRef, useState } from 'react';
import './Weather.css';

// switch expression	Case expressions	    Works?	Why?
//switch(true)	     case weatherId >= 200 && ..  Yes   Comparing true === true
//switch(weatherId)	 case 200: or case 201:      Yes	Exact match with weatherId number
//switch(weatherId)	 case weatherId >= 200 && ...No	    Comparing number === boolean (false)

function Weather(){
    function getWeatherIcon (weatherId){
        switch(true){
            case(weatherId >= 200 && weatherId < 300):
                return "⛈️";
             case(weatherId >= 300 && weatherId < 500):
                return "🌦️";
            case(weatherId >= 500 && weatherId < 600):
                return "🌧️";
            case(weatherId >= 600 && weatherId < 701):
                return "🌨️";
            case (weatherId === 800):
                return "☀️";
            case(weatherId >= 801 && weatherId < 805):
                return "☁️";
             default:
                return "❓";

        }
    }

    const inputref = useRef(null);

    let [weatherdata,setWeatherdata] = useState(false);
    
    const search = async(city)=>{
        if(city==""){
            alert("Enter city name !");
            return;
        }
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch (url);
            const data = await response.json();
            if(!response.ok){
                alert("City not found");
                return;
;            }

            console.log(data);
            setWeatherdata({
                humidity:data.main.humidity,
                windspeed:data.wind.speed,
                temperature: (data.main.temp - 273.15).toFixed(1),
                location:data.name,
                icon:getWeatherIcon(data.weather[0].id)
            })

        }catch(error){
            setWeatherdata(false);
            console.error("Error in fetching data");
        }
    }
 
    return(
        <>
        <div className="background">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder="Search" ref={inputref}></input>
                    <img src="/assets/search-bar-icon.png" alt="search icon" onClick={()=>search(inputref.current.value)}></img>
                </div>
                {weatherdata?<>
                 <span className='icon'>{weatherdata.icon}</span>
                <p className='temperature'>{weatherdata.temperature}°C</p>
                <p className='location'>{weatherdata.location}</p>

                <div className="weather-data">

                    <div className="col">
                        <span className='humidityicon'>💧</span>
                        <div>
                            <p>{weatherdata.humidity} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>

                       <div className="col">
                        <span className='windicon'>🌬️</span>
                        <div>
                            <p>{weatherdata.windspeed} Km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
                
                
                </>:<></>}

               
                

               
            </div>
        </div>
      
        

        </>
    );

    
}
export default Weather
