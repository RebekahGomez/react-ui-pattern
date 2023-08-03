import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <NavLink to="/api/character/:id">Rick</NavLink>
      <NavLink to="">Morty</NavLink>
      <NavLink to="">Summer</NavLink>
      <NavLink to="">Beth</NavLink>
      <NavLink to="">Jerry</NavLink>
    </nav>
  )
}