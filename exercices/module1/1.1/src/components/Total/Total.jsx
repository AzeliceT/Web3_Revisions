// filepath: /c:/Web3_Revisions/exercices/module1/1.1/src/Total.jsx
import PropTypes from 'prop-types';

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return <p>Number of exercises {total}</p>
}

Total.propTypes = {
    parts: PropTypes.arrayOf(
        PropTypes.shape({
            exercises: PropTypes.number.isRequired
        })
    ).isRequired
};

export default Total