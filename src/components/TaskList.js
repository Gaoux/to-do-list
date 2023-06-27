import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function TaskList(props) {
  const navigate = useNavigate();
  const [showCompleted, setShowCompleted] = useState('false');
  let uncompletedTasks = [];
  let completedTasks = [];

  React.Children.forEach(props.children, (element) => {
    if (!React.isValidElement(element)) return;
    const source = element.props;
    if (source.completed === false) {
      uncompletedTasks.push(element);
    } else {
      completedTasks.push(element);
    }
  });

  const handleCompletedClick = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="task-list-container">
      <h2
        className="title m-4 lg cursor-pointer hover:opacity-50"
        onClick={() => navigate('/tasks')}
      >
        Tasks ({props.children.length})
      </h2>
      {uncompletedTasks}
      <div
        className={`subtitle flex ${completedTasks.length === 0 && 'hidden'}`}
      >
        <FontAwesomeIcon
          className={`icon ${showCompleted && 'icon--rotate'}`}
          icon={faAngleDown}
          onClick={handleCompletedClick}
        />
        <h3 className="ml-4 mb-4 mt-4 lg">
          Completed ({completedTasks.length})
        </h3>
      </div>
      {showCompleted ? null : completedTasks}
    </div>
  );
}

export { TaskList };
