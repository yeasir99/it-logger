import React from 'react';
import { IconContext } from 'react-icons';
import { GrAdd } from 'react-icons/gr';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdPersonAdd } from 'react-icons/io';

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger white-text"
      >
        <IconContext.Provider
          value={{
            size: '1.5em',
            style: { verticalAlign: 'middle' },
          }}
        >
          <div>
            <GrAdd />
          </div>
        </IconContext.Provider>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <IconContext.Provider
              value={{ size: '1.5em', style: { verticalAlign: 'middle' } }}
            >
              <div>
                <BsFillPersonFill />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#tech-modal" className="btn-floating red modal-trigger">
            <IconContext.Provider
              value={{ size: '1.5em', style: { verticalAlign: 'middle' } }}
            >
              <div>
                <IoMdPersonAdd />
              </div>
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
