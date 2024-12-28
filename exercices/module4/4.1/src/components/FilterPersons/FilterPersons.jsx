import 'react'
import PropTypes from 'prop-types'



const FilterPersons = ({ filterValue, changeFilter }) => {

  const handleFilterChange = (e) => {
    const newValue = e.target.value;
    changeFilter(newValue);
  }

  return (
    <div>
      filter shown with <input value={filterValue} onChange={handleFilterChange} />
    </div>
  )
}
FilterPersons.propTypes = {
  filterValue: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
}

export default FilterPersons