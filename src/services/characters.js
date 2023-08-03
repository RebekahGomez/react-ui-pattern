import api from "./apiConfig.js"

// Create all CRUD functions below
// Will basically need one function to start - get Character

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
    // if I already have /api/character in the API URL in my 
    // apiConfig.js file, do I need them here in my response?
    const response = await api.get(`/character/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}