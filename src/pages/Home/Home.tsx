import React from 'react';
import Header from '../../components/Header/Header';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to StableCoin Strategist</h1>
        <h2>Learn and Earn with Interactive Stablecoin Simulations</h2>
        <button className="get-started-btn">
          <h3>Get Started</h3>
        </button>
      </section>

      {/* Introduction to Stablecoins */}
      <section className="intro">
        <h2>What are Stablecoins?</h2>
        <p>
          Stablecoins are digital assets designed to maintain a stable value by being pegged to a reserve or algorithmically managed. They are crucial in decentralized finance (DeFi) for providing stability in trading, lending, and other financial activities.
        </p>
        <img src="/assets/stablecoin-diagram.png" alt="Stablecoin types diagram" className="intro-img" />
      </section>

      {/* Features Overview */}
      <section className="features">
        <h2>Explore Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Educational Modules</h3>
            <p>Gain in-depth knowledge about fiat-backed, crypto-collateralized, and algorithmic stablecoins.</p>
          </div>
          <div className="feature-card">
            <h3>Strategy Simulations</h3>
            <p>Simulate real-world DeFi strategies and understand their impact.</p>
          </div>
          <div className="feature-card">
            <h3>Rewards System</h3>
            <p>Track and claim rewards based on your learning and strategy execution.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Connect Your Wallet</h3>
            <p>Link your wallet to start interacting with our platform.</p>
          </div>
          <div className="step">
            <h3>2. Learn and Practice</h3>
            <p>Complete educational modules and simulate DeFi strategies.</p>
          </div>
          <div className="step">
            <h3>3. Earn Rewards</h3>
            <p>Claim rewards based on your progress and achievements.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"StableCoin Strategist has been a game-changer for my understanding of stablecoins. The interactive simulations made learning fun and engaging!"</p>
          <p>- Alex T.</p>
        </div>
        {/* You can add more testimonials */}
      </section>

      {/* Footer */}
      <footer className="footer">
        <ul className="footer-links">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <div className="social-media">
          {/* Social Media Icons */}
        </div>
      </footer>
    </div>
  );
}

export default Home;
