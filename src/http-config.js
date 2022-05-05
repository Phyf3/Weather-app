import axios from "axios";


const http = axios.create({
    baseURL : "https://api.weatherapi.com/v1"
});

export default http