import React from 'react';

import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <h1>Github Search</h1>

      <Link to="/search">
        <button>Search for a user</button>
      </Link>

      <button>Random user</button>

    </div>
  )
};

export default Home;
