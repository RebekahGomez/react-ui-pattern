import './App.css';
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav.jsx"
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
    charactersData.length = 5
    setCharacters(charactersData)
  }

  return (
    <div className="App">
      <Nav characters={characters} />
      <Routes>
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>

    </div>
  );
}

export default App;
