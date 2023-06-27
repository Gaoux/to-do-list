import { DailyTasks } from '../components/DailyTasks';
import { TaskItem } from '../components/TaskItem';
import { AddButton } from '../components/AddButton';
import { AddTaskModal } from '../components/AddTaskModal';
import { ListsContainer } from '../components/ListsContainer';
import { ListItem } from '../components/ListItem';
import React, { useState } from 'react';

function Home({
  tasks,
  lists,
  onCompleteClick,
  onImportantClick,
  changeObjSelected,
}) {
  //Add task modal
  const [activeAddTask, setActiveAddTask] = useState(false);

  return (
    <>
      <ListsContainer changeObjSelected={changeObjSelected}>
        {lists.map((list) => (
          <ListItem
            key={list.name}
            name={list.name}
            nTasks={list.nTasks}
            nTasksCompleted={list.nTasksCompleted}
            description={list.description}
            openInfo={() => changeObjSelected(list.name, 'list')}
          />
        ))}
      </ListsContainer>
      <DailyTasks
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
      </DailyTasks>
      <AddButton active={activeAddTask} setActive={setActiveAddTask} />
      <AddTaskModal show={activeAddTask} setShow={setActiveAddTask} />
    </>
  );
}

export { Home };
