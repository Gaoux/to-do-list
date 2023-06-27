import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (!props.activeSearch) {
      navigate('/search');
    } else {
      navigate(-1);
    }
    props.setActiveSearch(!props.activeSearch);
  };

  const hadleSearchChange = (e) => {
    props.setSearchValue(e.target.value);
  };
  return (
    <div className="navbar">
      {props.activeSearch ? (
        <div> </div>
      ) : (
        <div className="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className="menu">
            <li>
              <FontAwesomeIcon icon={faHouse} />
              <button onClick={() => navigate('/')}>Home</button>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <button onClick={() => navigate('/tasks')}>My tasks</button>
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} />
              <button onClick={() => navigate('/important')}>Important</button>
            </li>
            <li>
              <FontAwesomeIcon icon={faList} />
              <button onClick={() => navigate('/lists')}>My lists</button>
            </li>
            {/* <li className="account">
              <FontAwesomeIcon icon={faUser} />
              <button onClick={() => navigate('/account')}>My account</button>
            </li> */}
          </ul>
        </div>
      )}

      <h2 className="title">{props.title}</h2>
      <div className="search-box">
        <button className="btn-search" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={props.activeSearch ? faX : faSearch} />
        </button>
        <input
          type="text"
          className={`input-search ${
            props.activeSearch && 'input-search--active'
          }`}
          value={props.searchValue}
          placeholder="Search..."
          onChange={hadleSearchChange}
        />
      </div>
    </div>
  );
}

export { Navbar };
