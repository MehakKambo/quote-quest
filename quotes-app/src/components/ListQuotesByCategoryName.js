import React, { useState } from 'react';
import '../styles/ListQuotesByCategoryName.css';

function ListQuotesByCategory() {
  const [categoryQuotes, setCategoryQuotes] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [numQuotes, setNumQuotes] = useState(5); // Default to 5 quotes
  const [totalQuotes, setTotalQuotes] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const fetchCategoryQuotes = async () => {
    setIsFetching(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/quotes/category/${categoryName}?limit=${numQuotes}`
      );
      const data = await response.json();

      if (response.ok) {
        setCategoryQuotes(data.quotes);
        setTotalQuotes(data['total quotes available']);
      } else if (response.status === 404 || data.quotes.length === 0) {
        setCategoryQuotes([]);
        setTotalQuotes(0);
      } else {
        setCategoryQuotes([]);
        console.error('Error fetching category quotes:', data.error);
      }
    } catch (error) {
      console.error('Error fetching category quotes:', error);
    } finally {
      setIsFetching(false);
    }
  };

  const renderQuotes = () => {
    if (totalQuotes > 0) {
        return (
        <div className='quotes'>
            <h2>Quotes in Category {categoryName}: </h2>
            <ul>
            {categoryQuotes.map((quote, index) => (
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
                <p>No quotes found for the specified category.</p>
            </div>
        );
    }
  }

  return (
    <div className="ListQuotesByCategory">
      <header>
        <a href='/'>
          <h1>Quotes API</h1>
        </a>
      </header>
      <div className='categoryNameInput'>
        <br></br><br></br>
        <h1>Quotes by Category</h1>
        <p>Total Quotes Available: {totalQuotes}</p>
        <label htmlFor="categoryName">Enter Category Name: </label>
        <input
          type="text"
          id="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <br /><br />
        <label htmlFor="numQuotes">Number of Quotes: </label>
        <input
          type="number"
          id="numQuotes"
          value={numQuotes}
          onChange={(e) => setNumQuotes(e.target.value)}
        />
        <br /><br />
        <button onClick={fetchCategoryQuotes} disabled={isFetching}>
          {isFetching ? 'Fetching Quotes...' : 'Get Quotes'}
        </button>
      </div>
      {renderQuotes()}
    </div>
  );
}

export default ListQuotesByCategory;
