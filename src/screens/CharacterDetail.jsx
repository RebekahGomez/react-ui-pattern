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
    <div className="char-details">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character?.name} />
      <div className="char-items">
        <h3>Species: {character.species}</h3>
        <p>Gender: {character.gender}</p>
        {<p>Health Status: {character.status}</p>}
      </div>
    </div>
  )
}