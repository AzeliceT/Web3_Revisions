// filepath: /c:/Web3_Revisions/exercices/module1/1.1/src/components/Content.jsx
import PropTypes from 'prop-types';
import Part from '../Part/Part';

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

Content.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      exercises: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Content