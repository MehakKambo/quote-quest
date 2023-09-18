import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RandomQuote  from './components/RandomQuote';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/quotes/random" exact element={<RandomQuote/>} />
        </Routes>
      </Router>
    </main>
    );
}

export default App;
