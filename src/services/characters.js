import api from "./apiConfig.js"

// Create all CRUD functions below
// Will basically need one function to start - get Character
// Can build it out later to add more, but this project is going
// to be relatively simple - doing the Tabs pattern

export const getCharacter = async (id) => {
  try {
    // if I already have /api/character in the API URL in my 
    // apiConfig.js file, do I need them here in my response?
    const response = await api.get(`/api/character/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}