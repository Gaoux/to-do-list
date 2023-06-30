import React from 'react';

function AddButton(props) {
  const handleClick = () => {
    props.setActive(!props.active);
    //Add code here to show add a task Window
  };

  return (
    <button
      className={`add-btn ${props.active && 'add-btn--active'}`}
      onClick={handleClick}
    >
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
}

export { AddButton };
