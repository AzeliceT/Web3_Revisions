import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CountersContext = createContext();

const ProviderWrapper = ( {children}) => {
  const [good, setGood] = useState(0);
  const [ok, setOk] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseOk = () => setOk(ok + 1);
  const increaseBad = () => setBad(bad + 1);
  const resetAll = () => {
    setGood(0);
    setOk(0);
    setBad(0);
  };

  return (
    <CountersContext.Provider value={{ good, ok, bad, increaseGood, increaseOk, increaseBad, resetAll }}>
      {children}
    </CountersContext.Provider>
  );
};
ProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CountersContext, ProviderWrapper };