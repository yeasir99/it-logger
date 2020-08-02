import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';
import { IconContext } from 'react-icons';
import { MdSearch } from 'react-icons/md';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');
  const handleChange = e => searchLogs(text.current.value);
  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs..."
              ref={text}
              onChange={handleChange}
            />
            <label className="label-icon" htmlFor="search">
              <IconContext.Provider value={{ size: '1.5em', color: '#fff' }}>
                <MdSearch />
              </IconContext.Provider>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propsTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
