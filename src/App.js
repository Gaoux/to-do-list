import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const navigateHome = () => {
    setCurrPage('Home');
    navigate('/');
  };
  const navigateLists = () => {
    setCurrPage('My Lists');
    navigate('/');
  };
  const navigateTasks = () => {
    setCurrPage('My Tasks');
    navigate('/');
  };

  const [currPage, setCurrPage] = useState('Home');
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
        navigateHome={navigateHome}
        navigateLists={navigateLists}
        navigateTasks={navigateTasks}
        setActiveSearch={setActiveSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        title={currPage}
      />
      <Routes>
        <Route
          path="/"
          element={<Home tasks={tasks} setTasks={setTasks} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
