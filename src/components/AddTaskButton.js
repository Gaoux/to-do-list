import React from 'react';

function AddTaskButton(props) {
  const handleClick = () => {
    props.setActive(!props.active);
    //Add code here to show add a task Window
  };

  return (
    <button
      className={props.active ? 'add-task-btn active' : 'add-task-btn'}
      onClick={handleClick}
    >
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
}

export { AddTaskButton };
