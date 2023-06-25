import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
function CompletedTasks(props) {
  const handleCompletedClick = () => {
    props.setShow(!props.show);
  };

  const emptyChildren = props.nTasks === 0;
  return (
    <>
      <div className={`subtitle flex ${emptyChildren && 'hidden'}`}>
        <FontAwesomeIcon
          className={`icon ${props.show && 'icon--rotate'}`}
          icon={faAngleDown}
          onClick={handleCompletedClick}
        />
        <h3 className="ml-4 mb-4 mt-4 lg">Completed ({props.nTasks})</h3>
      </div>
      {props.show ? null : props.children}
    </>
  );
}

export { CompletedTasks };
