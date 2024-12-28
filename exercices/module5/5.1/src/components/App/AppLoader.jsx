import { ProviderWrapper } from '../../contexts/counterContext';
import App from '../App/App';

const AppLoader = () => {
  return (
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  );
};

export default AppLoader;