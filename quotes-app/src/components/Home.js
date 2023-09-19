import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

function Home() {
  return (
    <div className="Home">
      <header>
        <a href='/'>
          <h1>Quotes API</h1>
        </a>
      </header>
      <main>
        <section className="features">
          <div className="feature">
            <h2>Explore Random Quotes</h2>
            <p>Discover a world of wisdom, inspiration, and motivation with our collection of quotes.</p>
            <Link to="/quotes/random">
              <button className="btn-primary">Get Started</button>
            </Link>
          </div>
          <div className="feature">
            <h2>Discover Inspiring Authors</h2>
            <p>Explore the diverse world of authors and their profound insights, ideas, and creativity.</p>
            <Link to="/authors">
              <button className="btn-primary">Browse Authors</button>
            </Link>
          </div>
          <div className="feature">
            <h2>Explore Quotes by Individual Author</h2>
            <p>Delve into the wisdom and insights of your favorite authors through their quotes.</p>
            <Link to="/quotes/authorName">
              <button className="btn-primary">Find Quotes by Author</button>
            </Link>
          </div>
          <div className="feature">
            <h2>Find a Quote by its Unique ID</h2>
            <p>Search for a specific quote using its unique identifier. Dive into the wisdom, insights, and inspiration behind each quote.</p>
            <Link to="/quotes/quoteID">
              <button className="btn-primary">Find Quote by ID</button>
            </Link>
          </div>

          <div className="feature">
            <h2>Discover Categories of Quotes</h2>
            <p>Explore various categories of quotes, from love and wisdom to motivation and inspiration.</p>
            <Link to="/categories">
              <button className="btn-primary">Browse Categories</button>
            </Link>
          </div>
          <div className="feature">
            <h2>Explore Quotes by Category</h2>
            <p>Discover quotes that fit your interests and explore various categories of wisdom, motivation, and more.</p>
            <Link to="/quotes/categoryName">
              <button className="btn-primary">Browse by Category</button>
            </Link>
          </div>

          <div className="feature">
            <h2>Contribute Quotes</h2>
            <p>Share your favorite quotes with the community. Let your wisdom inspire others.</p>
            <Link to="/quotes/newQuote">
              <button className="btn-primary">Contribute</button>
            </Link>
          </div>
          <div className="feature">
            <h2>Update a Quote</h2>
            <p>Have you found an error or want to suggest an improvement for a quote? Submit a request to update it, and our experts will review your suggestion.</p>
            <Link to="/quotes/updateQuote">
              <button className="btn-primary">Submit Update Request</button>
            </Link>
          </div>


          <div className="feature">
            <h2>Contribute to this project</h2>
            <p>Join our open-source community and showcase your coding skills by contributing to this project. Help us make this platform even better!</p>
            <Link to="https://github.com/MehakKambo/quotes-api">
              <button className="btn-primary">Contribute</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
