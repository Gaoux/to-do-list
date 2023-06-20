import { Navbar } from './components/Navbar';
import { Categories } from './components/Categories';
import { TaskList } from './components/TaskList';
import { TaskItem } from './components/TaskItem';
import { AddTaskButton } from './components/AddTaskButton';
import { AddTaskPopup } from './components/AddTaskPopup';
import React from 'react';
import { useState } from 'react';

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
  const [activeAddTaskBtn, setActiveAddTaskBtn] = useState(false);
  return (
    //This is jsx code (es javascript + xml)
    <React.Fragment>
      <Navbar />
      <h1>Your Tasks</h1>
      <Categories completed={2} total={5} />
      <TaskList>
        {defaultTasks.map((task) => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
          />
        ))}
      </TaskList>
      <AddTaskButton
        active={activeAddTaskBtn}
        setActive={setActiveAddTaskBtn}
      />
      <AddTaskPopup
        trigger={activeAddTaskBtn}
        setTrigger={setActiveAddTaskBtn}
      ></AddTaskPopup>
    </React.Fragment>
  );
}

export default App;
