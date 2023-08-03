import { NavLink } from "react-router-dom"

export default function Nav({ characters }) {
  return (
    <nav>
      <NavLink className="navlink" to="/">All Characters</NavLink>
      {characters?.map((char) => (
        <NavLink className="navlink" to={`/character/${char.id}`} key={char.id}>{char.name}</NavLink>
      ))}
    </nav>
  )
}