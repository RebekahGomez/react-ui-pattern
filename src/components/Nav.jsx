import { NavLink } from "react-router-dom"

export default function Nav({ characters }) {
  return (
    <nav>
      {characters?.map((char) => (
        <NavLink className="navlink" to={`/character/${char.id}`} key={char.id}>{char.name}</NavLink>
      ))}
    </nav>
  )
}