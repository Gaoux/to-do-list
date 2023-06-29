import React, { useContext } from 'react';
import { ImportantTaskList } from './ImportantTaskList';
import { TaskItem } from '../../components/TaskItem';
import { TodoContext } from '../../TodoContext';

function Important() {
  const { tasks, completeTask, makeTaskImportant, changeTaskSelected } =
    useContext(TodoContext);
  return (
    <ImportantTaskList>
      {tasks.map((task) => (
        <TaskItem
          key={task.name}
          name={task.name}
          completed={task.completed}
          repeat={task.repeat}
          date={task.date}
          important={task.important}
          notes={task.notes}
          onCompleteClick={() => completeTask(task.name)}
          onImportantClick={() => makeTaskImportant(task.name)}
          openInfo={() => changeTaskSelected(task.name)}
        />
      ))}
    </ImportantTaskList>
  );
}

export { Important };
