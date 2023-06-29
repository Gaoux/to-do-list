import React from 'react';
import { ImportantTaskList } from './ImportantTaskList';
import { TaskItem } from '../../components/TaskItem';

function Important({
  tasks,
  onCompleteClick,
  onImportantClick,
  changeTaskSelected,
}) {
  return (
    <ImportantTaskList onCompleteClick={onCompleteClick}>
      {tasks.map((task) => (
        <TaskItem
          key={task.name}
          name={task.name}
          completed={task.completed}
          repeat={task.repeat}
          date={task.date}
          important={task.important}
          notes={task.notes}
          onCompleteClick={() => onCompleteClick(task.name)}
          onImportantClick={() => onImportantClick(task.name)}
          openInfo={() => changeTaskSelected(task.name)}
        />
      ))}
    </ImportantTaskList>
  );
}

export { Important };
