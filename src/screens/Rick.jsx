import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Rick() {
  const [rick, setRick] = useState({})

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
      <h1>{character.name}</h1>
      <img src={character.image} alt={charcter.name} />
      <h2>{character.species}</h2>
      <h3>{character.gender}</h3>
      {character.alive ? <p>Alive</p> : <p>Dead</p>}
    </div>
  )
}