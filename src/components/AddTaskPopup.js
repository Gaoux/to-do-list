import React from 'react';

function AddTaskPopup({ trigger }) {
  return trigger ? (
    <div className="popup">
      <div className="add-task-popup">
        <div className="title">
          <button className="close-button" onClick={() => (trigger = false)}>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <p>Add a new task</p>
        </div>
        <div className="input">
          <input placeholder="What task you want to add?" />
          <button>Add</button>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export { AddTaskPopup };
