import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import './App.css';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/start" element={<Start></Start>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
