import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home(){
  return (
    <div className='layout-container'>
      <div className='navbar'>
        <button className='navbar-button'>One</button>
        <button className='navbar-button'>Two</button>
        <button className='navbar-button'>Three</button>
      </div>
      <div className='main-content'>
        <header className='home-header'>
          <p>Main site page</p>
          <Link to="/start">
            <button>Start</button>
          </Link>
        </header>
      </div>
    </div>
  );
}

export default Home;
