import './App.css';
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav.jsx"
import CharacterDetail from './screens/CharacterDetail.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {/* do we need /api/character/ if it's in the API URL? */}
        <Route path="/api/character/:id" element={<CharacterDetail />} />
      </Routes>

    </div>
  );
}

export default App;
