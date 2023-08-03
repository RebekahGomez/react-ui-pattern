import { useState, useEffect } from "react"
import { getCharacters } from "../services/characters"
import Character from "../components/Character.jsx"

export default function Characters({ characters }) {
  // We don't need all of this because we've already
  // called useState and useEffect for the characters in App.js
  // const [characters, setCharacters] = useState([])

  // useEffect(() => {
  //   fetchCharacters()
  // }, [])

  // async function fetchCharacters() {
  //   const allCharacters = await getCharacters()
  //   setCharacters(allCharacters)
  // }

  return (
    <div>
      <h2>All Characters</h2>
      <div className="characters-container">
        {characters.map((character) => (
          <div>
            <Character character={character} />
          </div>
        ))}
      </div>
    </div>
  )
}