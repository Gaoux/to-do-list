import React from 'react';
import { ImportantTaskList } from '../components/ImportantTaskList';
import { TaskItem } from '../components/TaskItem';

function Important({
  tasks,
  onCompleteClick,
  onImportantClick,
  changeObjSelected,
}) {
  return (
    <ImportantTaskList
      onCompleteClick={onCompleteClick}
      changeObjSelected={changeObjSelected}
    >
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
          openInfo={() => changeObjSelected(task.name, 'task')}
        />
      ))}
    </ImportantTaskList>
  );
}

export { Important };
