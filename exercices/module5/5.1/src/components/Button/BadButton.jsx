import { useContext } from 'react';
import { CountersContext } from '../../contexts/counterContext';

const BadButton = () => {
  const { increaseBad } = useContext(CountersContext);

  return <button onClick={increaseBad}>Bad</button>;
};

export default BadButton;