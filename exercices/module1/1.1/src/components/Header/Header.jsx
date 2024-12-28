// filepath: /c:/Web3_Revisions/exercices/module1/1.1/src/Header.jsx
import PropTypes from 'prop-types';

const Header = ({ course }) => {
    return <h1>{course}</h1>
  }

Header.propTypes = {
    course: PropTypes.string.isRequired,
};
  
export default Header