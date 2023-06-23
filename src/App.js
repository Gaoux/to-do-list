import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { MyTasks } from './pages/MyTasks';
import { MyLists } from './pages/MyLists';
import { Important } from './pages/Important';
import { MyAccount } from './pages/MyAccount';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

// const defaultTasks = [
//   { id: 1, text: 'Cut hair', completed: false },
//   { id: 2, text: 'Drink water', completed: true },
//   { id: 3, text: 'Go to the gym', completed: false },
//   { id: 4, text: 'End this proyect', completed: false },
// ];
const defaultTasks = [
  {
    text: 'Finish this React App',
    completed: false,
    date: '',
    notes: 'End this To Do App',
  },
  { text: 'Cut hair', completed: false, date: '', notes: '' },
  { text: 'Drink water', completed: true, date: '', notes: '' },
  { text: 'Go to the gym', completed: false, date: '', notes: '' },
  { text: 'Prepare dinner', completed: true, date: '', notes: '' },
];

function App() {
  // const navigate = useNavigate();

  // const navigate = useNavigate();
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
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route
          path="/tasks"
          element={<MyTasks tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/important"
          element={<Important tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/lists"
          element={<MyLists tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/account"
          element={<MyAccount tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    </>
  );
}

export default App;
