import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getCharacter } from "../services/characters";

export default function CharacterDetail() {
  const [character, setCharacter] = useState({})


  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    fetchCharacter()
  }, [id])

  async function fetchCharacter() {
    const oneCharacter = await getCharacter(id)
    setCharacter(oneCharacter)
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character?.name} />
      <h2>{character.species}</h2>
      <h3>{character.gender}</h3>
      {<p>{character.status}</p>}
    </div>
  )
}