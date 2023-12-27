// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [resetConfirmation, setResetConfirmation] = useState(false);

  useEffect(() => {
    // Fetch user profile data from the backend
    axios.get('/api/profile')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });
  }, []);

  const handleResetProgress = () => {
    // Send a request to the backend to reset user progress
    axios.post('/api/reset')
      .then(() => {
        setResetConfirmation(true);
      })
      .catch(error => {
        console.error('Error resetting progress:', error);
      });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Language: {user.language}</p>
      <p>Progress: {user.progress}%</p>
      <button onClick={handleResetProgress}>Reset Progress</button>
      {resetConfirmation && <p>Progress reset successfully!</p>}
    </div>
  );
};

export default Profile;
