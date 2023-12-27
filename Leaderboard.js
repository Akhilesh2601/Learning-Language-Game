// src/components/Leaderboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from the backend
    axios.get('/api/leaderboard')
      .then(response => {
        setLeaderboard(response.data);
      })
      .catch(error => {
        console.error('Error fetching leaderboard:', error);
      });
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
