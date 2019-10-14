import React from 'react';
import axios from 'axios';
import qs from 'qs';

import ServerHealth from './serverhealth/ServerHealth';

import './App.css';

const preventDefault = func => event => {
  event.preventDefault();
  return func(event);
};

const App = () => {
  const [games, setGames] = React.useState(100);
  const [doors, setDoors] = React.useState(3);
  const [changing, setChanging] = React.useState(false);
  const [result, setResult] = React.useState(undefined);

  const simulate = async event => {
    try {
      const res = await axios.get(`/simulate?${qs.stringify({ games, changing, doors })}`);
      setResult(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <ServerHealth />
      </header>

      <form className="App-form" onSubmit={preventDefault(simulate)}>
        <div className="row">
          <label>Games</label>
          <input value={games} onChange={event => setGames(event.target.value)} type="number" />
        </div>

        <div className="row">
          <label>Doors</label>
          <input value={doors} onChange={event => setDoors(event.target.value)} type="number" />
        </div>

        <div className="row">
          <label>Changing</label>

          <div className="changingInputs">
            <label htmlFor="changingYesInput">
              Yes
              <input
                type="checkbox"
                id="changingYesInput"
                name="changingYesInput"
                onChange={() => setChanging(true)}
                checked={changing}
              />
            </label>
            <label htmlFor="changingNoInput">
              No
              <input
                type="checkbox"
                id="changingNoInput"
                name="changingNoInput"
                onChange={() => setChanging(false)}
                checked={!changing}
              />
            </label>
          </div>
        </div>

        <button type="submit">Simulera</button>
      </form>

      <pre>{JSON.stringify(result, null, 4)}</pre>
    </div>
  );
};

export default App;
