import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home(){
  return (
    <div className="App">
      <header className="home-header">
        <p>Welcome to Drew's site</p>
        <Link to="/start">
          <button>Start</button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
