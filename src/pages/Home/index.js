import { DailyTasks } from './DailyTasks';
import { TaskItem } from '../../components/TaskItem';
import { AddButton } from '../../components/ui/AddButton';
import { AddTaskModal } from '../../components/ui/AddTaskModal';
import { ListsContainer } from '../../components/ListsContainer';
import { ListItem } from '../../components/ListItem';
import React, { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';

function Home() {
  const {
    tasks,
    lists,
    completeTask,
    makeTaskImportant,
    changeTaskSelected,
    changeListSelected,
  } = useContext(TodoContext);
  //Add task modal
  const [activeAddTask, setActiveAddTask] = useState(false);

  return (
    <>
      <ListsContainer>
        {lists.map((list) => (
          <ListItem
            key={list.name}
            name={list.name}
            nTasks={list.nTasks}
            nTasksCompleted={list.nTasksCompleted}
            openInfo={() => changeListSelected(list.name)}
          />
        ))}
      </ListsContainer>
      <DailyTasks>
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
      </DailyTasks>
      <AddButton active={activeAddTask} setActive={setActiveAddTask} />
      <AddTaskModal show={activeAddTask} setShow={setActiveAddTask} />
    </>
  );
}

export { Home };
