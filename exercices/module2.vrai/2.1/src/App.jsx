import PropTypes from 'prop-types';
import Header from './Header/Header.jsx';
import Counter from './Counter/Counter.jsx';
import ColorBox from './ColorBox/ColorBox.jsx';
import '../src/App.css';

function App({ title, message, hoverMessage }) {
  return (
    <>
      <Header />
      <h1>{title}</h1>
      <Counter message={message} hoverMessage={hoverMessage} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
    </>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  hoverMessage: PropTypes.string.isRequired,
};

export default App;