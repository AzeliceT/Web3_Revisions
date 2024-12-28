const OpinionItem = ({ opinion, voteOpinion }) => {
  return (
    <div>
      <p>{opinion.text} - Votes: {opinion.votes}</p>
      <button onClick={() => voteOpinion(opinion.id)}>Vote</button>
    </div>
  );
};


export default OpinionItem;