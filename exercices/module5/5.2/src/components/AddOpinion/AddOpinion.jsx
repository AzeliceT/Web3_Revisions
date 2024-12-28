import { useState, useContext } from 'react';
import { OpinionContext } from '../../contexts/OpinionContext';
import { v4 as uuidv4 } from 'uuid';

const AddOpinion = () => {
  const [text, setText] = useState('');
  const { addOpinion } = useContext(OpinionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addOpinion({ id: uuidv4(), text, votes: 1 });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add your opinion"
      />
      <button type="submit">Add Opinion</button>
    </form>
  );
};

export default AddOpinion;