import React from 'react';
import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';

const TechItem = ({ tech }) => {
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content">
          <AiFillDelete />
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
