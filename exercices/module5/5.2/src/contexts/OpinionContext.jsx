import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const OpinionContext = createContext();

const OpinionProvider = ({ children }) => {
  const [opinions, setOpinions] = useState([]);

  const addOpinion = (opinion) => {
    setOpinions(prevOpinions => [...prevOpinions, opinion].sort((a, b) => b.votes - a.votes));
  };

  const voteOpinion = (id) => {
    setOpinions(prevOpinions =>
      prevOpinions.map(opinion =>
        opinion.id === id ? { ...opinion, votes: opinion.votes + 1 } : opinion
      ).sort((a, b) => b.votes - a.votes)
    );
  };

  return (
    <OpinionContext.Provider value={{ sortedOpinions: opinions, addOpinion, voteOpinion }}>
      {children}
    </OpinionContext.Provider>
  );
};

OpinionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OpinionProvider;