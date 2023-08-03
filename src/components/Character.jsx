import { Link } from "react-router-dom"

export default function Character({ character }) {
  return (
    <div key={character._id}>
      <Link to={`/character/${character.id}`}>
        <img src={character.image} alt={character.name} />
      </Link>
    </div>
  )
}