import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="main-heading">Ihre Karriere bei AGRAVIS</h1>
      <div className="job-search">
        <div className="job-postings">

        </div>
        <div className="filter-pannel">
          <input className="text-search-field" placeholder="Jobangebote durchsuchen" />
        </div>
      </div>
    </div>
  );
}

export default App;
