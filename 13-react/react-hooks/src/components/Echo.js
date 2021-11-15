import React, { useState } from 'react';

const Echo = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('Gwenda');

  return (
    <div>
      <h2>{ message }</h2>
      <input onInput={ (e) => setMessage(e.target.value) } placeholder="Your message here" />

      <hr />

      <h2>{ name }</h2>
      <input onInput={ (e) => setName(e.target.value) } placeholder="Your name here" />
    </div>
  );
};

export default Echo;
