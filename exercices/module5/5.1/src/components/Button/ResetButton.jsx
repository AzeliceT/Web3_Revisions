import { useContext } from 'react';
import { CountersContext } from '../../contexts/counterContext';

const ResetButton = () => {
  const { resetAll } = useContext(CountersContext);

  return <button onClick={resetAll}>Reset</button>;
};

export default ResetButton;