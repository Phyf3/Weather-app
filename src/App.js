import './App.css';
import Overview from './pages/overview';
import Details from './pages/details';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import http from './http-config'

function App() {
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(true);
  const [openSearch, setOpenSearch] = useState(false);


 const getLattLong =  ()  => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleLocation, error, option);
        // console.log("Gotten Latt & Long")
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
      // console.log("latitude",pos.coords.latitude)
      // console.log("longitude",pos.coords.longitude)

      const key = process.env.REACT_APP_API_KEY

      const getLocation = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);

      // 10.0007862606
      // 7.9973385669
      console.log("res",getLocation.data)
      console.log("locatiooon",getLocation.data.principalSubdivision)
      const currentLocation = getLocation.data.principalSubdivision;

      const response = await http.get(`/forecast.json?key=${key}&q=${currentLocation}&days=10&aqi=no&alerts=no`)

      console.log("weather api",response.data)
      setData(response.data)
    } 
    catch (error) {
      console.log(error.response?.data || error.message)
    }
    finally {
      setLoading(false)
    }
}

useEffect(() => {
    getLattLong()
     
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  return (
    <div className="App">
      <div>
        <Overview 
          data={data} loading = {loading} getLattLong = {getLattLong}
          openSearch = {openSearch} setOpenSearch = {setOpenSearch} 
        />
      </div>

      <div>
        <Details 
          data={data} loading = {loading}
          openSearch = {openSearch} setOpenSearch = {setOpenSearch}
        />
      </div>
    </div>
  );
}

export default App;
