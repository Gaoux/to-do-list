import React, { useState } from 'react';

function AddTaskButton(e) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    //Add code here to show add a task Window
  };

  return (
    <button
      className={active ? 'add-task-btn active' : 'add-task-btn'}
      onClick={handleClick}
    >
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
}

export { AddTaskButton };
