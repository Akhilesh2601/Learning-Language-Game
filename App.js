// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
