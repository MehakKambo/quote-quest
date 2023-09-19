import React, { useState } from 'react';
import '../styles/ListQuotesByAuthorName.css';

function ListQuotesByAuthorName() {
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [numQuotes, setNumQuotes] = useState(5); // Default to 5 quotes
  const [totalQuotes, setTotalQuotes] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const handleInputChange = (e) => {
    setAuthorName(e.target.value);
  };

  const handleNumQuotesChange = (e) => {
    setNumQuotes(e.target.value);
  };

  const fetchAuthorQuotes = async () => {
    setIsFetching(true);

    try {
      const response = await fetch(`http://127.0.0.1:5000/quotes/author/${authorName}?limit=${numQuotes}`);
      const data = await response.json();

      if (response.ok) {
        setAuthorQuotes(data.quotes);
        setTotalQuotes(data['total quotes available']);
      } else if (response.status === 404) {
        setAuthorQuotes([]);
        console.error('Error fetching author quotes:', data.error);
      } else {
        setAuthorQuotes([]);
        console.error('Error fetching author quotes:', data.error);
      }
    } catch (error) {
      console.error('Error fetching author quotes:', error);
    } finally {
      setIsFetching(false);
    }
  };

  const renderQuotes = () => {
    if (authorQuotes.length > 0) {
      return (
        <div className='quotes'>
          <h2>Quotes by {authorName}:</h2>
          <ul>
            {authorQuotes.map((quote, index) => (
              <li key={index}>
                <p>{quote}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className='quotes'>
          <p>No quotes found for the specified author.</p>
        </div>
      );
    }
  };

  return (
    <div className="ListQuotesByAuthorName">
      <header>
        <a href='/'>
          <h1>Quotes API</h1>
        </a>
      </header>
      <div className='authorNameInput'>
        <br></br><br></br>
        <h1>Quotes by Author Name</h1>
        <p>Total Quotes Available: {totalQuotes}</p>
        <label htmlFor="authorName">Enter Author Name: </label>
        <input
          type="text"
          id="authorName"
          value={authorName}
          onChange={handleInputChange}
        />
        <br /><br />
        <label htmlFor="numQuotes">Number of Quotes: </label>
        <input
          type="number"
          id="numQuotes"
          value={numQuotes}
          onChange={handleNumQuotesChange}
        />
        <br /><br />
        <button onClick={fetchAuthorQuotes} disabled={isFetching}>
          {isFetching ? 'Fetching Quotes...' : 'Get Quotes'}
        </button>
      </div>
      {renderQuotes()}
    </div>
  );
}

export default ListQuotesByAuthorName;
