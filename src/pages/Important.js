import React from 'react';
import { ImportantTaskList } from '../components/ImportantTaskList';
import { TaskItem } from '../components/TaskItem';

function Important({ tasks, setTasks }) {
  return (
    <ImportantTaskList>
      {tasks.map((task) => (
        <TaskItem
          key={task.text}
          text={task.text}
          completed={task.completed}
          date={task.date}
          important={task.important}
          notes={task.notes}
        />
      ))}
    </ImportantTaskList>
  );
}

export { Important };
