import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import RandomQuote  from './components/RandomQuote';
import QuoteByID from './components/QuoteByID';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/quotes/random" exact element={<RandomQuote/>} />
          <Route path="/quotes/quoteID" exact element={<QuoteByID/>} />
        </Routes>
      </Router>
    </main>
    );
}

export default App;
