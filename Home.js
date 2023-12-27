// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Language Learning Game!</h1>
      <p>Choose a language to start learning:</p>
      <Link to="/quiz">Start Quiz</Link>
    </div>
  );
};

export default Home;
