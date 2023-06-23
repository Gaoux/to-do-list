import React from 'react';

function TaskList(props) {
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
      <h2 className="title m-4 lg">Tasks</h2>
      {uncompletedTasks}
      <h3 className="subtitle ml-4 mb-4 mt-4 lg">Completed</h3>
      {completedTasks}
    </div>
  );
}

export { TaskList };
