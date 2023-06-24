import React, { useState } from 'react';
import './App.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPages';
import CardDetails from './components/card/card-details/cardDetail';


function App() {
 
  const [favoriteNames, setFavoriteNames] = useState<string[]>([]);
  return (


    <Router>
    <nav className="p-4 bg-gray-200">
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="ml-4">
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<FavoritesPage favoriteNames={favoriteNames} />} />
      <Route path="/detail/:id" element={<CardDetails />} />
    </Routes>
  </Router>
  )
}

export default App;
