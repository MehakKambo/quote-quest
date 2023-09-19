import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import RandomQuote  from './components/RandomQuote';
import QuoteByID from './components/QuoteByID';
import Authors from './components/ListAuthors';
import Categories from './components/ListCategories';
import AuthorName from './components/ListQuotesByAuthorName';
import CategoryName from './components/ListQuotesByCategoryName';
import AddNewQuote from './components/AddNewQuote';
import UpdateQuote from './components/UpdateQuote';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/quotes/random" exact element={<RandomQuote/>} />
          <Route path="/quotes/quoteID" exact element={<QuoteByID/>} />
          <Route path="/authors" exact element={<Authors/>} />
          <Route path="/categories" exact element={<Categories/>} />
          <Route path="/quotes/authorName" exact element={<AuthorName/>} />
          <Route path="/quotes/categoryName" exact element={<CategoryName/>} />
          <Route path="/quotes/newQuote" exact element={<AddNewQuote/>} />
          <Route path="/quotes/updateQuote" exact element={<UpdateQuote/>} />
        </Routes>
      </Router>
    </main>
    );
}

export default App;
