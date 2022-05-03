import React, {useState, useEffect} from 'react'
import pointer from '../images/target.svg'
import '../styles/overview.css'
import shower from '../images/Shower.png'
import http from '../http-config'


const Overview = () => {

const [location, setLocation] = useState("")
const [loading, setLoading] = useState(true);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleLocation);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}
    
     

const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

const handleLocation = async (pos) => {
    try {
        navigator.geolocation.getCurrentPosition(getLocation, error, options);

        const {data} = await http.get(`/search/?lattlong=${pos.coords.latitude},${pos.coords.longitude}`);
        console.log(data)
        const reData = await http.get(`/${data[0].woeid}/`);
        console.log("woeid",data[0].woeid)
        console.log(reData);
        console.log(reData.data.consolidated_weather[0].weather_state_name);
        setLoading(false)

        
        setLocation(data)
        } 
        catch (error) {
            console.log(error.response?.data || error.message)
        }
}

useEffect(() => {
    handleLocation()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

return (
<div className='overview'>
    <header className='overview_header' >
        <div className='search_btn-container' >
            <button>Search for places </button>
        </div>

        <div>
            <img className='pointer' src={pointer} alt="" />
        </div>
    </header>

    <main>
        <section>
            <img src={shower} alt="" />
        </section> 

        <section>
            <div className='degree' >
                <h1> <span>15</span>°C </h1>
            </div>
            <div className='weather-type'>
                <h2>Shower</h2>
            </div>
            <div className='day'>
                <span>Today</span>
                <span>Fri,5 Jun</span>
            </div>
            {loading ? <h1>Loading ...</h1> :
             <div className="location">
                {location[0].title}
            </div>}
        </section>
    </main>
</div>
)
}

export default Overview