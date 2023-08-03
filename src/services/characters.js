import api from "./apiConfig.js"

// Create all CRUD functions below

export const getCharacters = async () => {
  try {
    const response = await api.get("/character")
    return response.data.results
  } catch (error) {
    console.log(error)
  }
}

export const getCharacter = async (id) => {
  try {
    const response = await api.get(`/character/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}