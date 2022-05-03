import axios from "axios";


const http = axios.create({
    baseURL : "https://www.metaweather.com/api/location"
});

export default http