import axios from "axios";


const http = axios.create({
    baseURL : "http://api.weatherapi.com/v1"
});

export default http