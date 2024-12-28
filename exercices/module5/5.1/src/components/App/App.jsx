import { useContext } from 'react';
import { CountersContext } from '../../contexts/counterContext';
import GoodButton from '../Button/GoodButton';
import OkButton from '../Button/OkButton';
import BadButton from '../Button/BadButton';
import ResetButton from '../Button/ResetButton';

const App = () => {
  const { good, ok, bad } = useContext(CountersContext);

  return (
    <div>
      <h1>Vote de satisfaction</h1>
      <p>Good: {good}</p>
      <p>Ok: {ok}</p>
      <p>Bad: {bad}</p>
      <GoodButton />
      <OkButton />
      <BadButton />
      <ResetButton />
    </div>
  );
};

export default App;