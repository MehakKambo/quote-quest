import React, { useState, useEffect } from 'react';
import '../styles/ListCategories.css';

function ListCategories() {
  const [categories, setCategories] = useState([]);
  const [numCategories, setNumCategories] = useState(5); // Default to 5 categories
  const [totalCategories, setTotalCategories] = useState(0); // Total number of categories
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    function fetchCategories() {}
    fetchCategories();
  }, [numCategories]);

  const fetchCategories = async () => {
    setIsFetching(true);

    try {
      const response = await fetch(`http://127.0.0.1:5000/categories?limit=${numCategories}`);
      const data = await response.json();

      if (response.ok) {
        setCategories(data.categories);
        setTotalCategories(data['total number of categories']);
      } else {
        setCategories([]);
        setTotalCategories(0);
        console.error('Error fetching categories:', data.error);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="ListCategories">
      <header>
        <a href='/'>
          <h1>Welcome to the World of Wisdom</h1>
          <a href='/' className='home-button'>Home</a>
        </a>
      </header>
      <br></br>
      <div className='categoriesInput'>
        <h1>List of Categories</h1>
        <p>Total Categories Available: {totalCategories}</p>
        <label htmlFor="numCategories">Number of Categories:</label>
        <input
          type="number"
          id="numCategories"
          value={numCategories}
          onChange={(e) => setNumCategories(e.target.value)}
          disabled={isFetching} // Disable input while fetching
        />
        <br></br><br></br>
        <button onClick={fetchCategories} disabled={isFetching}>
          {isFetching ? 'Fetching Categories...' : 'Get Categories'}
        </button>
      </div>
      <div className='feat'>
        {categories.map((category, index) => (
          <ul key={index}><li><p>{category}</p></li></ul>
        ))}
      </div>
    </div>
  );
}

export default ListCategories;
