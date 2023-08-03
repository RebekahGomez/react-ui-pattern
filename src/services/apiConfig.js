import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://rickandmortyapi.com/api",
  development: "https://rickandmortyapi.com/api"
}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl
})

export default api;