import React, { useState } from 'react';
import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';
import { AddButton } from '../components/AddButton';
import { AddTaskModal } from '../components/AddTaskModal';

function MyTasks({
  tasks,
  onCompleteClick,
  onImportantClick,
  changeTaskSelected,
}) {
  //Add task modal
  const [activeAddTask, setActiveAddTask] = useState(false);
  return (
    <>
      <TaskList onCompleteClick={onCompleteClick}>
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
            openInfo={() => changeTaskSelected(task.name, 'task')}
          />
        ))}
      </TaskList>
      <AddButton active={activeAddTask} setActive={setActiveAddTask} />
      <AddTaskModal show={activeAddTask} setShow={setActiveAddTask} />
    </>
  );
}

export { MyTasks };
