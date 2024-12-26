import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Content from '../Content/Content';
import '../../../src/index.css';

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div className="course-container">
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <p className="course-total">Total of {totalExercises} exercises</p>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        exercises: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Course;