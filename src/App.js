import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { MyTasks } from './pages/MyTasks';
import { MyLists } from './pages/MyLists';
import { Important } from './pages/Important';
import { MyAccount } from './pages/MyAccount';
import { Search } from './pages/Search';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

// const defaultTasks = [
//   { id: 1, text: 'Cut hair', completed: false },
//   { id: 2, text: 'Drink water', completed: true },
//   { id: 3, text: 'Go to the gym', completed: false },
//   { id: 4, text: 'End this proyect', completed: false },
// ];
const defaultLists = [
  {
    name: 'Work',
    nTasks: 2,
    nTasksCompleted: 1,
    tasks: [],
  },
  {
    name: 'House',
    nTasks: 5,
    nTasksCompleted: 4,
    tasks: [],
  },
  {
    name: 'Whatever',
    nTasks: 12,
    nTasksCompleted: 12,
    tasks: [],
  },
  {
    name: 'House 2',
    nTasks: 10,
    nTasksCompleted: 2,
    tasks: [],
  },
  {
    name: 'Lala',
    nTasks: 9,
    nTasksCompleted: 4,
    tasks: [],
  },
  {
    name: 'Work 2',
    nTasks: 2,
    nTasksCompleted: 1,
    tasks: [],
  },
];

const defaultTasks = [
  {
    text: 'Finish this React App',
    completed: false,
    important: true,
    date: '',
    repeat: 'everyday',
    notes: 'End this To Do App',
  },

  {
    text: 'Cut hair with barber',
    completed: false,
    important: false,
    date: '',
    notes: '',
  },
  {
    text: 'Drink water',
    completed: true,
    important: true,
    date: '',
    notes: '',
  },
  {
    text: 'Go to the gym',
    completed: false,
    important: false,
    date: '',
    notes: '',
  },
  {
    text: 'Prepare dinner',
    completed: true,
    important: false,
    date: '',
    notes: '',
  },
];

function App() {
  //Lists
  const [lists, setLists] = useState(defaultLists);
  //Tasks
  const [tasks, setTasks] = useState(defaultTasks);
  //Search
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Navbar
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              lists={lists}
              setLists={setLists}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Route
          path="/tasks"
          element={<MyTasks list={lists} tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/important"
          element={<Important tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/lists"
          element={
            <MyLists
              lists={lists}
              setLists={setLists}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Route
          path="/account"
          element={<MyAccount tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/search"
          element={
            <Search searchValue={searchValue} lists={lists} tasks={tasks} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
