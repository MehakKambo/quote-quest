import React, { useState, useEffect } from 'react';
import '../styles/ListAuthors.css';

function ListAuthors() {
  const [authors, setAuthors] = useState([]);
  const [numAuthors, setNumAuthors] = useState(5); // Default to 5 authors
  const [totalAuthors, setTotalAuthors] = useState(0); // Total number of authors
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    function fetchAuthors(){}
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    setIsFetching(true);

    try {
      const totalResponse = await fetch(`http://127.0.0.1:5000/authors`);
      const totalData = await totalResponse.json();

      if (totalResponse.ok) {
        setTotalAuthors(totalData['total number of authors']);
      } else {
        setTotalAuthors(0);
        console.error('Error fetching total number of authors:', totalData.error);
      }

      const authorsResponse = await fetch(`http://127.0.0.1:5000/authors?limit=${numAuthors}`);
      const authorsData = await authorsResponse.json();

      if (authorsResponse.ok) {
        setAuthors(authorsData.authors);
      } else {
        setAuthors([]);
        console.error('Error fetching authors:', authorsData.error);
      }
    } catch (error) {
      console.error('Error fetching authors:', error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="ListAuthors">
      <header>
        <a href='/'>
          <h1>Quotes API</h1>
          <a href='/' className='home-button'>Home</a>
        </a>
      </header>
      <br></br>
      <div className='authorInput'>
        <h1>List of Authors</h1>
        <p>Total Authors Available: {totalAuthors}</p>
        <label htmlFor="numAuthors">Number of Authors:</label>
        <input
          type="number"
          id="numAuthors"
          value={numAuthors}
          onChange={(e) => setNumAuthors(e.target.value)}
          disabled={isFetching} // Disable input while fetching
        />
        <br></br><br></br>
        <button onClick={fetchAuthors} disabled={isFetching}>
          {isFetching ? 'Fetching Authors...' : 'Get Authors'}
        </button>
      </div>
      <div className='feat'>
        {authors.map((author, index) => (
          <ul key={index}><li><p>{author}</p></li></ul>
        ))}
      </div>
    </div>
  );
}

export default ListAuthors;
