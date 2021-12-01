import React from 'react';
import _ from 'underscore';

import { Link } from 'react-router-dom';

const Home = (props) => {

  const _gotoRandomUser = () => {
    const students = ['Schultzy9', 'EhsanAlimo', 'ivanveselinov', 'Meraki-Destric', 'StephenSant', 'sarahjune85', 'deanmsw', 'cheddachedda', 'tracey-web', 'agpoulsen', 'gouthamgo', 'MJ5141', 'alekskuzmin', 'derekw26', 'jzwermut', 'Keith-hoka', 'dcc7', 'bernardomar', 'angepol', 'Just-Kundai', 'appaluza'];
    const randomStudent = _(students).sample();
    props.history.push(`/details/${ randomStudent }`);
  };

  return (
    <div>
      <h1>Github Search</h1>

      <Link to="/search">
        <button>Search for a user</button>
      </Link>

      <button onClick={ _gotoRandomUser }>Random user</button>

    </div>
  )
};

export default Home;
