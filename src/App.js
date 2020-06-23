import React from 'react';
import { Route } from "react-router-dom"
import './App.css';

/*Component imports */
import Jobs from './components/Jobs';
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={Jobs} />
    </div>
  );
}

export default App;
