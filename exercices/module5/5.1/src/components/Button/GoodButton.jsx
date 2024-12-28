import { useContext } from 'react';
import { CountersContext } from '../../contexts/counterContext';

const GoodButton = () => {
  const { increaseGood } = useContext(CountersContext);

  return <button onClick={increaseGood}>Good</button>;
};

export default GoodButton;