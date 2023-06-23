import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';
import { AddTaskButton } from '../components/AddTaskButton';
import { AddTaskModal } from '../components/AddTaskModal';
import { ListsContainer } from '../components/ListsContainer';
import React, { useState } from 'react';

function Home({ tasks, setTasks }) {
  //Add task modal
  const [activeAddTask, setActiveAddTask] = useState(false);
  <>
    return <ListsContainer />
    {/* {activeSearch ? <br /> : <ListsContainer />} */}
    <TaskList>
      {tasks.map((task) => (
        <TaskItem key={task.text} text={task.text} completed={task.completed} />
      ))}
    </TaskList>
    <AddTaskButton active={activeAddTask} setActive={setActiveAddTask} />
    <AddTaskModal
      tasks={tasks}
      setTasks={setTasks}
      show={activeAddTask}
      setShow={setActiveAddTask}
    />
    ;
  </>;
}

export { Home };
