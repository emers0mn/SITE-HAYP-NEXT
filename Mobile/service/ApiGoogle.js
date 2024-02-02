import axios from "axios";

const ApiGoogle = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/place/details"
});


export default ApiGoogle;