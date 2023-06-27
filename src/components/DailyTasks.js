import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function DailyTasks(props) {
  const navigate = useNavigate();
  const [showCompleted, setShowCompleted] = useState('false');
  let uncompletedTasks = [];
  let completedTasks = [];

  React.Children.forEach(props.children, (element) => {
    if (!React.isValidElement(element)) return;
    const source = element.props;

    if (source.repeat !== 'Everyday' && !source.date) return;
    else {
      var curr = new Date();
      curr.setDate(curr.getDate() - 1);
      var date = curr.toISOString().substring(0, 10);
      if (source.repeat === 'Everyday' || source.date === date) {
        if (source.completed === false) uncompletedTasks.push(element);
        else completedTasks.push(element);
      }
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
        Today's tasks
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

export { DailyTasks };
