import React from 'react';
import Greetings from '../../components/greeting/Greeting';

function Home() {
  return (
    <div className="container">
      <h2>Refresh to get a new random message!</h2>
      <Greetings />
    </div>
  );
}

export default Home;
