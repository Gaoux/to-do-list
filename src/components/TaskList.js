import React, { useState } from 'react';
import { CompletedTasks } from './CompletedTasks';
import { TaskItem } from './TaskItem';
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

  return (
    <div className="task-list-container">
      <h2
        className="title m-4 lg cursor-pointer hover:opacity-50"
        onClick={() => navigate('/tasks')}
      >
        Tasks ({props.children.length})
      </h2>
      {uncompletedTasks}
      <CompletedTasks
        show={showCompleted}
        setShow={setShowCompleted}
        nTasks={completedTasks.length}
      >
        {completedTasks.map((task) => (
          <TaskItem
            key={task.props.name}
            name={task.props.name}
            completed={task.props.completed}
            repeat={task.props.repeat}
            date={task.props.date}
            important={task.props.important}
            notes={task.props.notes}
            onCompleteClick={() => props.onCompleteClick(task.props.name)}
            openInfo={() => props.changeObjSelected(task.props.name, 'task')}
          />
        ))}
      </CompletedTasks>
    </div>
  );
}

export { TaskList };
