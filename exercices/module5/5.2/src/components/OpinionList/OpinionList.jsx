import { useContext } from 'react';
import { OpinionContext } from '../../contexts/OpinionContext';
import OpinionItem from '../../components/OpinionItem/OpinionItem';

const OpinionList = () => {
  const { sortedOpinions, voteOpinion } = useContext(OpinionContext);

  return (
    <div>
      {sortedOpinions.map(opinion => (
        <OpinionItem key={opinion.id} opinion={opinion} voteOpinion={voteOpinion} />
      ))}
    </div>
  );
};

export default OpinionList;