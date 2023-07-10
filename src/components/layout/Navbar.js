import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../../TodoContext';

function Navbar() {
  const {
    activeSearch,
    setActiveSearch,
    searchValue,
    setSearchValue,
    pageTitle,
  } = useContext(TodoContext);

  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (!activeSearch) {
      navigate('/search');
    } else {
      navigate(-1);
    }
    setActiveSearch(!activeSearch);
  };

  const hadleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="navbar">
      {activeSearch ? (
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

            <li className="account">
              <FontAwesomeIcon icon={faUser} />
              <button>Gustavo Parra</button>
            </li>
            <div className="footer">
              <a href="https://github.com/Gaoux">
                <img
                  src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
                  alt="GitHub Logo"
                  className="footer-icon github"
                ></img>
              </a>

              <a href="www.linkedin.com/in/gustavo-parra-tanoux-39b28127a">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn Logo"
                  className="footer-icon"
                />
              </a>
            </div>
          </ul>
        </div>
      )}

      <h2 className="title">{pageTitle}</h2>
      <div className="search-box">
        <button className="btn-search" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={activeSearch ? faX : faSearch} />
        </button>
        <input
          type="text"
          className={`input-search ${activeSearch && 'input-search--active'}`}
          value={searchValue}
          placeholder="Search..."
          onChange={hadleSearchChange}
        />
      </div>
    </div>
  );
}

export { Navbar };
