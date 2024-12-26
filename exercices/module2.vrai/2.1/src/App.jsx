import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropTypes from 'prop-types'
import ColorBox from './ColorBox/ColorBox.jsx'

function App({ title, message, hoverMessage }) {
  const initialCount = JSON.parse(localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialCount)
  const [showHoverMessage, setShowHoverMessage] = useState(false)

  const handleCount = () => {
    setCount((count) => {
      const newCount = count + 1;
      localStorage.setItem("count", JSON.stringify(newCount));
      return newCount;
    });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
    </>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  hoverMessage: PropTypes.string.isRequired,
}

export default App