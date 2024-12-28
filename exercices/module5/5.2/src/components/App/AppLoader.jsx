import OpinionProvider from '../../contexts/OpinionContext';
import App from '../App/App';

const AppLoader = () => {
  return (
    <OpinionProvider>
      <App />
    </OpinionProvider>
  );
};

export default AppLoader;