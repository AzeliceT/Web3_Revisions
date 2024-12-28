import { useContext } from 'react';
import { CountersContext } from '../../contexts/counterContext';

const OkButton = () => {
  const { increaseOk } = useContext(CountersContext);

  return <button onClick={increaseOk}>Ok</button>;
};

export default OkButton;