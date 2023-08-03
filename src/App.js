import './App.css';
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav.jsx"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/api/character/:id" element={ } />
      </Routes>

    </div>
  );
}

export default App;
//https://rickandmortyapi.com/api/character