import React, { useState } from 'react';
import { CompletedTasks } from './CompletedTasks';
import { useNavigate } from 'react-router-dom';
import { TaskItem } from './TaskItem';

function DailyTasks(props) {
  const navigate = useNavigate();
  const [showCompleted, setShowCompleted] = useState('false');
  let uncompletedTasks = [];
  let completedTasks = [];

  React.Children.forEach(props.children, (element) => {
    if (!React.isValidElement(element)) return;
    const source = element.props;

    if (source.repeat !== 'everyday' && !source.date) return;
    else if (
      source.repeat === 'everyday' ||
      source.date.toDateString() === new Date().toDateString()
    ) {
      if (source.completed === false) uncompletedTasks.push(element);
      else completedTasks.push(element);
    }
  });

  return (
    <div className="task-list-container">
      <h2
        className="title m-4 lg cursor-pointer hover:opacity-50"
        onClick={() => navigate('/tasks')}
      >
        Today's tasks
      </h2>
      {uncompletedTasks}
      <CompletedTasks
        show={showCompleted}
        setShow={setShowCompleted}
        nTasks={completedTasks.length}
      >
        {completedTasks.map((task) => (
          <TaskItem
            key={task.props.text}
            text={task.props.text}
            completed={task.props.text}
            repeat={task.props.text}
            date={task.props.text}
            important={task.props.text}
            notes={task.props.text}
          />
        ))}
      </CompletedTasks>
    </div>
  );
}

export { DailyTasks };