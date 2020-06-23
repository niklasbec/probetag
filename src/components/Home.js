import React from 'react';
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div className="home">
          <NavLink className="navlink" to ="/jobs">Jobs</NavLink>
    </div>
  );
}

export default Home;
