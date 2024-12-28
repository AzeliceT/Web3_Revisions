import OpinionProvider from '../../contexts/OpinionContext';
import OpinionList from '../../components/OpinionList/OpinionList';
import AddOpinion from '../../components/AddOpinion/AddOpinion';

const App = () => {
  return (
    <OpinionProvider>
      <div>
        <h1>Opinion Voting App</h1>
        <OpinionList />
        <AddOpinion />
      </div>
    </OpinionProvider>
  );
};

export default App;