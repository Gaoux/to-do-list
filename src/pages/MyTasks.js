import React from 'react';
import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';

function MyTasks({ tasks, setTasks }) {
  return (
    <TaskList>
      {tasks.map((task) => (
        <TaskItem key={task.text} text={task.text} completed={task.completed} />
      ))}
    </TaskList>
  );
}

export { MyTasks };
