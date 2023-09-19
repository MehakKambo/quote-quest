import React, { useState } from 'react';
import '../styles/AddNewQuote.css';

function AddNewQuote() {
  const [quoteText, setQuoteText] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quote: quoteText,
          author: authorName,
          category: category,
        }),
      });

      if (response.ok) {
        alert('Quote added successfully!');
        setQuoteText('');
        setAuthorName('');
        setCategory('');
      } else {
        const data = await response.json();
        alert(`Error adding quote: ${data.error}`);
      }
    } catch (error) {
      console.error('Error adding quote:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="AddNewQuote">
      <header>
        <a href='/'>
          <h1>Quotes API</h1>
          <a href='/' className='home-button'>Home</a>
        </a>
      </header>
      <div className='quoteForm'>
        <h1>Add New Quote</h1>
        <form onSubmit={handleFormSubmit}>
          <div className='inputGroup'>
            <label htmlFor="quoteText">Quote:</label>
            <textarea
              id="quoteText"
              value={quoteText}
              onChange={(e) => setQuoteText(e.target.value)}
              required
            ></textarea>
          </div>
          <div className='inputGroup'>
            <label htmlFor="authorName">Author:</label>
            <input
              type="text"
              id="authorName"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className='submitGroup'>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Adding Quote...' : 'Add Quote'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewQuote;
