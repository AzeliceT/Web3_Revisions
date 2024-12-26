import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Counter({ message, hoverMessage }) {
  const initialCount = JSON.parse(localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialCount);
  const [showHoverMessage, setShowHoverMessage] = useState(false);

  const handleCount = () => {
    setCount((count) => {
      const newCount = count + 1;
      localStorage.setItem("count", JSON.stringify(newCount));
      return newCount;
    });
  };

  return (
    <div className="card">
      <div style={{ height: '20px' }}>
        {showHoverMessage && <p>{hoverMessage}</p>}
      </div>
      <button
        onClick={handleCount}
        onMouseEnter={() => setShowHoverMessage(true)}
        onMouseLeave={() => setShowHoverMessage(false)}
      >
        count is {count}
      </button>
      {count >= 10 && <p>{message}</p>}
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

Counter.propTypes = {
  message: PropTypes.string.isRequired,
  hoverMessage: PropTypes.string.isRequired,
};

export default Counter;