import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getCharacter } from "../services/characters";

export default function CharacterDetail() {
  const [character, setCharacter] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    fetchCharacter()
  }, [])

  async function fetchCharacter() {
    const oneCharacter = await getCharacter(id)
    setCharacter(oneCharacter)
  }

  return (
    <div>
      {/* looks like the array in the API is called "results"? */}
      {/* but when I run this in the browser, it says 'results' not defined */}
      <h1>{results.name}</h1>
      <img src={results.image} alt={results.name} />
      <h2>{results.species}</h2>
      <h3>{results.gender}</h3>
      {results.alive ? <p>Alive</p> : <p>Dead</p>}
    </div>
  )
}