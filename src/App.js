import React, {useState} from "react"
import axios from "axios"

function App() {
  const [data,setdata] = useState({})
  const [location, setLocation] = useState("")

 
  const searchLocation = (event) =>{
     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=95d055bd1640656f2a33964d628ddf99`
    if (event.key  === "Enter")
    {
      axios.get(URL).then((Response) => {
        setdata(Response.data)
        console.log(Response.data)
      })
    }
  }
  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
          placeholder = "Enter location"
          type="text"/>
     </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.tofixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

{data.name !== undefined &&
 <div className="bottom">
 <div className="feels">
   <p>Feels Like</p>
 {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p>  : null }
 </div>
 
  <div className="sunrise">
   {data.timezone ? <p className="bold">{data.timezone.Sunrise}</p>  : null }
   <p>Sunrise {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
   </div>

   <div className="sunset">
   {data.timezone ? <p className="bold">{data.timezone.Sunset}</p>  : null }
   <p>Sunrise {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
   </div>
   
 <div className="humidity"> 
 <p>Humidity</p>
 {data.main ? <p className="bold">{data.main.humidity}%</p>  : null }
 </div>
 <div className="wind">
   <p>Wind Speed</p>
   {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MPH</p>  : null }
 </div>
</div>
}
      </div>
      
    </div>
    
  );
}

export default App;
