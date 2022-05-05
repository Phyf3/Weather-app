import React, {useState, useEffect} from 'react'
import pointer from '../images/target.svg'
import '../styles/overview.css'
import shower from '../images/Shower.png'
import http from '../http-config'
import axios from 'axios'
// import { Router } from 'express'
// import { createProxyMiddleware } from 'http-proxy-middleware'


const Overview = () => {


const [location, setLocation] = useState("")
const [loading, setLoading] = useState(true);

 const getLocation =  ()  => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleLocation, error, option);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}
    
     

const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

const option = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

const handleLocation = async (pos) => {
    try {
        const latitude = pos.coords.latitude;
         const  longitude = pos.coords.longitude;

        // const router = Router();
        // const options = {
        //     target : "https://www.metaweather.com/api/location",
        //     changeOrigin : true,
        //     pathRewrite: {
        //         [`^search/?lattlong=${latitude},${longitude}`]: ''
        //     }
        // }
        // router.get(`/?lattlong=${latitude},${longitude}`, createProxyMiddleware(options));
        
        console.log("latitude",pos.coords.latitude)
        console.log("longitude",pos.coords.longitude)

        const response = await axios.get(`/search/?lattlong=${latitude},${longitude}`);
        console.log(response)
        console.log(response.data)
        const data = response.data
        console.log("woeid",response.data[0].woeid)
        const woeid = response.data[0].woeid;

        const responseX2 = await axios.get(`/${woeid}`)
        console.log("x22",responseX2);
        console.log("x2", responseX2.data);
        // console.log(reData.data.consolidated_weather[0].weather_state_name);
        setLoading(false)

        
        setLocation(data)
        } 
        catch (error) {
            console.log(error.response?.data || error.message)
        }
}

useEffect(() => {
    getLocation()
    handleLocation()
    // const response = axios.get("/search/?query=ibadan");
    // console.log(response)
    // console.log(response.json())

    // const response = axios.get(`/search/?lattlong=10,8`)
    // console.log(response)
    // console.log(response.data)
    // .then((response) => response.json())
    // .then((actualData) => console.log(actualData))
    // .catch((err) => {
    //   console.log(err.message);
    // })
     
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