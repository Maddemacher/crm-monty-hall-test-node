import React from 'react';
import axios from 'axios';
import './ServerHealth.css';

const states = {
  unknown: 'UNKNOWN',
  up: 'UP',
  down: 'DOWN'
};

const ServerHealth = () => {
  const [serverHealth, setServerHealth] = React.useState(states.unknown);

  React.useEffect(() => {
    getHealth();
    const interval = setInterval(getHealth, 3000);
    return () => clearInterval(interval);
  });

  const getHealth = async () => {
    try {
      const res = await axios.get('/health');
      return setServerHealth(res.status === 200 ? states.up : states.down);
    } catch (error) {
      console.log(error);
      return setServerHealth(states.down);
    }
  };

  return (
    <div className="serverHealth">
      <p>
        Backend is: <a className={serverHealth}>{serverHealth}</a>
      </p>
    </div>
  );
};

export default ServerHealth;
