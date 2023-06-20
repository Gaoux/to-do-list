import { TaskCounter } from './components/TaskCounter';
import { TaskSearchBar } from './components/TaskSearchBar';
import { TaskList } from './components/TaskList';
import { TaskItem } from './components/TaskItem';
import { AddTaskButton } from './components/AddTaskButton';
import React from 'react';
import { AddTaskPopup } from './components/AddTaskPopup';

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
  return (
    //This is jsx code (es javascript + xml)
    <React.Fragment>
      <h1>Your Tasks</h1>
      <TaskCounter completed={2} total={5} />
      <TaskSearchBar />
      <TaskList>
        {defaultTasks.map((task) => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
          />
        ))}
      </TaskList>
      <AddTaskButton />
      <AddTaskPopup trigger={true}></AddTaskPopup>
    </React.Fragment>
  );
}

export default App;
