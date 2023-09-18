import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

function Home() {
  return (
    <div className="Home">
      <header>
        <h1>Welcome to Quotes API</h1>
      </header>
      <main>
        <section className="features">
          <div className="feature">
            <h2>Explore Quotes</h2>
            <p>Discover a world of wisdom, inspiration, and motivation with our collection of quotes.</p>
            <Link to="/quotes">
              <button className="btn-primary">Get Started</button>
            </Link>
          </div>
          <div className="feature">
            <h2>Contribute Quotes</h2>
            <p>Share your favorite quotes with the community. Let your wisdom inspire others.</p>
            <Link to="/contribute">
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
      <footer>
        <p>&copy; 2023 Quotes API</p>
      </footer>
    </div>
  );
}

export default Home;
