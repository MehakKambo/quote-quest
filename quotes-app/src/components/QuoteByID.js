import React, { useState } from 'react';
import '../styles/QuoteByID.css';

function QuoteByID() {
  const [quote, setQuote] = useState(null);
  const [quoteId, setQuoteId] = useState(1); // Default to quote ID 1
  const [isFetching, setIsFetching] = useState(false);
  const [notFound, setNotFound] = useState(false); // State to track 404 response

  const fetchQuoteById = async () => {
    setIsFetching(true);

    try {
      const response = await fetch(`http://127.0.0.1:5000/quotes/${quoteId}`);
      const data = await response.json();

      if (response.ok) {
        setNotFound(false); // Reset notFound state
        setQuote(data);
      } else if (response.status === 404) {
        setQuote(null);
        setNotFound(true); // Set notFound state to true
      } else {
        setQuote(null);
        setNotFound(false);
        console.error('Error fetching quote:', data.error);
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="QuoteByID">
      <header>
        <h1>Quotes API</h1>
        <a href='/' className='home-button'>Home</a>
      </header>
      <h2>Quote by ID</h2>
      <div id="quote-id-input">
        <label htmlFor="quoteId">Enter Quote ID: </label>
        <input
          type="number"
          id="quoteId"
          value={quoteId}
          onChange={(e) => setQuoteId(e.target.value)}
        />
        <br></br><br></br>
        <button onClick={fetchQuoteById} disabled={isFetching}>
          {isFetching ? 'Fetching Quote...' : 'Get Quote'}
        </button>
      </div>
      <div id="quote-container">
        {notFound ? (
          <p>No quote found with the specified ID.</p>
        ) : (
          quote !== null && (
            <div>
              <p><strong>Quote:</strong> {quote.quote}</p>
              <p><strong>Author:</strong> {quote.author}</p>
              <p><strong>Category:</strong> {quote.category}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default QuoteByID;
