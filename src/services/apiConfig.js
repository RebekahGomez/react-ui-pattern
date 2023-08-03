import axios from "axios";

let apiUrl = "https://rickandmortyapi.com/api"

const api = axios.create({
  baseURL: apiUrl
})

export default api;