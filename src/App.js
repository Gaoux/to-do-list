import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { MyTasks } from './pages/MyTasks';
import { MyLists } from './pages/MyLists';
import { Important } from './pages/Important';
import { MyAccount } from './pages/MyAccount';
import { Search } from './pages/Search';
import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import TaskSidePanel from './components/TaskSidePanel';

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
    name: 'Finish this React App',
    completed: false,
    important: true,
    date: new Date(),
    repeat: 'Everyday',
    notes: 'End this To Do App',
    listName: '',
  },

  {
    name: 'Cut hair with barber',
    completed: false,
    important: false,
    date: '',
    repeat: 'One time',
    notes: '',
    listName: '',
  },
  {
    name: 'Drink water',
    completed: true,
    important: true,
    repeat: 'Everyday',
    date: '',
    notes: '',
    listName: '',
  },
  {
    name: 'Go to the gym',
    completed: false,
    important: false,
    date: '',
    repeat: 'Everyday',
    notes: '',
    listName: '',
  },
  {
    name: 'Prepare dinner',
    completed: true,
    important: false,
    date: '',
    repeat: 'One time',
    notes: '',
    listName: '',
  },
];

function App() {
  const location = useLocation();
  //Lists
  const [lists, setLists] = useState(defaultLists);
  //Tasks
  const [tasks, setTasks] = useState(defaultTasks);
  //SidePanel
  const [showTaskSidePanel, setShowTaskSidePanel] = useState(true);
  const [objSelected, setObjSelected] = useState(tasks[0]);
  //Search
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  //Search lists
  const searchTasks = tasks.filter((task) => {
    const taskName = task.name.toLowerCase();
    const search = searchValue.toLowerCase();
    return taskName.includes(search);
  });
  const searchLists = lists.filter((list) => {
    const listName = list.name.toLowerCase();
    const search = searchValue.toLowerCase();
    return listName.includes(search);
  });
  //Complete or uncomplete tasks
  const completeTask = (name) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.name === name);
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  //Delete task
  const deleteTask = (name) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.name === name);
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  //Open Side bar on Click of Obj
  const openSideBar = (type) => {
    if (type === 'task') setShowTaskSidePanel(true);
    // else setShowListSidePanel(true);
  };
  //ChangeObjSelected
  const changeObjSelected = (name, type) => {
    if (type === 'task') {
      const index = tasks.findIndex((task) => task.name === name);
      setObjSelected(tasks[index]);
    } else {
      const index = lists.findIndex((list) => list.name === name);
      setObjSelected(lists[index]);
    }
    openSideBar(type);
  };
  //Navbar Title
  const changeTitle = () => {
    switch (location.pathname) {
      case '/tasks':
        return 'My tasks';

      case '/important':
        return 'Important';

      case '/lists':
        return 'My lists';

      case '/account':
        return 'My account';

      case '/search':
        return '';

      default:
        return 'Home';
    }
  };
  const pageTitle = changeTitle();
  //
  return (
    <>
      <Navbar
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        title={pageTitle}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              lists={lists}
              setLists={setLists}
              tasks={tasks}
              onCompleteClick={completeTask}
              changeObjSelected={changeObjSelected}
            />
          }
        />
        <Route
          path="/tasks"
          element={
            <MyTasks
              list={lists}
              tasks={tasks}
              onCompleteClick={completeTask}
              changeObjSelected={changeObjSelected}
            />
          }
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
              changeObjSelected={changeObjSelected}
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
            <Search
              searchValue={searchValue}
              lists={searchLists}
              tasks={searchTasks}
              listsLenght={searchLists.length}
              tasksLenght={searchTasks.length}
              onCompleteClick={completeTask}
              changeObjSelected={changeObjSelected}
            />
          }
        />
      </Routes>
      {showTaskSidePanel ? (
        <TaskSidePanel
          obj={objSelected}
          show={showTaskSidePanel}
          setShow={setShowTaskSidePanel}
          onDelete={() => deleteTask(objSelected.name)}
        />
      ) : null}
    </>
  );
}

export default App;
