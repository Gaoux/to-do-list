import { DailyTasks } from '../components/DailyTasks';
import { TaskItem } from '../components/TaskItem';
import { AddButton } from '../components/AddButton';
import { AddTaskModal } from '../components/AddTaskModal';
import { ListsContainer } from '../components/ListsContainer';
import { ListItem } from '../components/ListItem';
import React, { useState } from 'react';

function Home({ tasks, setTasks, lists, setLists }) {
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
            description={list.description}
          />
        ))}
      </ListsContainer>
      <DailyTasks>
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
      </DailyTasks>
      <AddButton active={activeAddTask} setActive={setActiveAddTask} />
      <AddTaskModal
        tasks={tasks}
        setTasks={setTasks}
        show={activeAddTask}
        setShow={setActiveAddTask}
      />
    </>
  );
}

export { Home };
