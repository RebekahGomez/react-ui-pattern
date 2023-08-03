import { useState, useEffect } from "react"
import { getCharacters } from "../services/characters"
import Character from "../components/Character.jsx"

export default function Characters({ characters }) {
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