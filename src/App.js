import './App.css';
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav.jsx"
import Characters from './screens/Characters';
import CharacterDetail from './screens/CharacterDetail.jsx';
import { useState, useEffect } from 'react';
import { getCharacters } from './services/characters';


function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
  }, [])

  async function fetchCharacters() {
    const charactersData = await getCharacters()
    charactersData.length = 15
    setCharacters(charactersData)
  }

  return (
    <div className="App">
      <Nav characters={characters} />
      <Routes>
        <Route path="/" element={<Characters characters={characters} />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
