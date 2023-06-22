import { Navbar } from './components/Navbar';

import { TaskList } from './components/TaskList';
import { TaskItem } from './components/TaskItem';
import { AddTaskButton } from './components/AddTaskButton';
import { AddTaskModal } from './components/AddTaskModal';
import React from 'react';
import { useState } from 'react';
import { ListsContainer } from './components/ListsContainer';

// const defaultTasks = [
//   { id: 1, text: 'Cut hair', completed: false },
//   { id: 2, text: 'Drink water', completed: true },
//   { id: 3, text: 'Go to the gym', completed: false },
//   { id: 4, text: 'End this proyect', completed: false },
// ];
const defaultTasks = [
  { text: 'Cut hair', completed: false },
  { text: 'Drink water', completed: true },
  { text: 'Go to the gym', completed: false },
  { text: 'End this proyect', completed: false },
];

function App() {
  const [activeAddTask, setActiveAddTask] = useState(false);
  return (
    //This is jsx code (es javascript + xml)
    <React.Fragment>
      <Navbar />
      <ListsContainer />
      <TaskList>
        {defaultTasks.map((task) => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
          />
        ))}
      </TaskList>
      <AddTaskButton active={activeAddTask} setActive={setActiveAddTask} />
      <AddTaskModal show={activeAddTask} setShow={setActiveAddTask} />
    </React.Fragment>
  );
}

export default App;
