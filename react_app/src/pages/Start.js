import React, { useState } from 'react';
import './Start.css'

function Start(){

  const [ currentTime, setCurrentTime ] = useState(null);

  function handleGetTime() {
    fetch('/time')
      .then(res => res.json())
      .then(data => {
        setCurrentTime(data.time)
      })
      .catch(error => {
        console.error('Error getting time: ', error);
        setCurrentTime('Error getting time');
      });
  }

  return (
    <div className="App">
      <header className="start-header">
        <p>This is the start page</p>
        <button onClick={handleGetTime}>Get Time</button>
        {currentTime && <p>The current time is {currentTime}.</p>}
      </header>
    </div>
  )
}


export default Start;
