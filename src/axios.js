import axios from "axios";

// The API (cloud function) URL to make requests to movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",  // baseURL is the base url to make requests to with prefix of /discover/movie?api_key=...
});

export default instance; 