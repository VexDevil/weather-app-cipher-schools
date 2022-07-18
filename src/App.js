import React, {useState} from "react"
import axios from "axios"

function App() {
  const [data,setdata] = useState({})
  const [location, setLocation] = useState("")

  const url = "https://api.openweathermap.org/data/2.5/weather?q={location}&appid=c1658396e71f34a9f6662d71eae1e3ff"
  const searchLocation = (event) =>{
    if (event.key  === "Enter")
    {
      axios.get(url).then((Response) => {
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
            <p>Punjab</p>
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
   {data.main ? <p>{data.main.feels_like.toFixed()}°F</p>  : null }
   <p>Feels Like</p>
 </div>
 <div className="humidity">
 {data.main ? <p className="bold">{data.main.humidity}%</p>  : null } 
 </div>
 <div className="wind">
 {data.main ? <p className="bold">{data.wind.speed.toFixed()}MPH</p>  : null }
   <p>Wind Speed</p>
 </div>
</div>
}
      </div>
      
    </div>
    
  );
}

export default App;
