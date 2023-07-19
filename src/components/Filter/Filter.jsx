import PropTypes from 'prop-types';

import { FilterText } from './Filter.styled';

export const Filter = ({ filteredValue, filterChange }) => {
  return (
    <div>
      <label>
        <FilterText>Find contacts by name</FilterText>
        <input
          type="text"
          onChange={filterChange}
          name="filter"
          value={filteredValue}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  filteredValue: PropTypes.string.isRequired,
};
