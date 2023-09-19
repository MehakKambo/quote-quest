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
            <h2>Explore Quotes</h2>
            <p>Discover a world of wisdom, inspiration, and motivation with our collection of quotes.</p>
            <Link to="/quotes/random">
              <button className="btn-primary">Get Started</button>
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
            <h2>Contribute to this project</h2>
            <p>Show us your coding skills by Contributing to this open-source project.</p>
            <Link to="https://github.com/MehakKambo/quotes-api">
              <button className="btn-primary">Contribute</button>
            </Link>
          </div>
          <div className="feature">
            <h2>Learn About Us</h2>
            <p>Discover the story behind Quotes API and how we're dedicated to spreading positivity.</p>
            <Link to="/about">
              <button className="btn-primary">About Us</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
