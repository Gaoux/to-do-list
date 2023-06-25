import React, { useState } from 'react';
import { CompletedTasks } from './CompletedTasks';
import { TaskItem } from './TaskItem';

function ImportantTaskList(props) {
  const [showCompleted, setShowCompleted] = useState('false');
  let uncompletedTasks = [];
  let completedTasks = [];

  React.Children.forEach(props.children, (element) => {
    if (!React.isValidElement(element)) return;
    const source = element.props;
    if (source.important === true) {
      if (source.completed === false) {
        uncompletedTasks.push(element);
      } else {
        completedTasks.push(element);
      }
    }
  });

  const handleCompletedClick = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="task-list-container">
      <h2 className="title m-4 lg">Important tasks</h2>
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

export { ImportantTaskList };
