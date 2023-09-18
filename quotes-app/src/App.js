import React, { useState } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [numQuotes, setNumQuotes] = useState(3); // Default to 3 quotes
  const [isFetching, setIsFetching] = useState(false);

  const getRandomQuotes = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(`http://127.0.0.1:5000/quotes/random?limit=${numQuotes}`);
      const data = await response.json();
      setQuotes(data.randomQuotes);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="App">
      <h1>Quotes App</h1>
      <div id="num-quotes-input">
        <label htmlFor="numQuotes">Number of Quotes:</label>
        <input
          type="number"
          id="numQuotes"
          value={numQuotes}
          onChange={(e) => setNumQuotes(e.target.value)}
        />
        <br></br>
        <br></br>
        <button onClick={getRandomQuotes} disabled={isFetching}>
          {isFetching ? 'Fetching Quotes...' : 'Get Random Quotes'}
        </button>
      </div>
      <div id="quote-container">
        <h2>Random Quotes</h2>
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>
              <p><strong>Quote:</strong> {quote.quote}</p>
              <p><strong>Author:</strong> {quote.author}</p>
              <p><strong>Category:</strong> {quote.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;