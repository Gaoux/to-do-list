import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul className="menu">
          <li>
            <FontAwesomeIcon icon={faHouse} />
            <a href="/">Home</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            <a href="/">My tasks</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
            <a href="/">Important</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faList} />
            <a href="/">My lists</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <a href="/">My account</a>
          </li>
        </ul>
      </div>
      <h2 className="title">{props.pageTitle} Home</h2>
      <div className="search-box">
        <button className="btn-search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input type="text" className="input-search" placeholder="Search..." />
      </div>
    </div>
  );
}

export { Navbar };
