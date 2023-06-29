import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { MyTasks } from './pages/MyTasks';
import { MyLists } from './pages/MyLists';
import { Important } from './pages/Important';
import { MyAccount } from './pages/MyAccount';
import { Search } from './pages/Search';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import TaskSidePanel from './components/TaskSidePanel';
import { ListPage } from './pages/ListPage';

const defaultTasks = [
  {
    name: 'Finish this React App',
    completed: false,
    important: true,
    date: '2023-06-26',
    repeat: 'Everyday',
    notes: 'End this To Do App',
    listName: 'Work',
  },

  {
    name: 'Cut hair with barber',
    completed: false,
    important: false,
    date: '',
    repeat: 'One time',
    notes: '',
    listName: 'Whatever',
  },
  {
    name: 'Drink water',
    completed: true,
    important: true,
    repeat: 'Everyday',
    date: '',
    notes: '',
    listName: 'Whatever',
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
    listName: 'House',
  },
];

const defaultLists = [
  {
    name: 'Work',
    nTasks: 2,
    nTasksCompleted: 1,
    description: '',
    tasks: [
      {
        name: 'Finish this React App',
        completed: false,
        important: true,
        date: '2023-06-26',
        repeat: 'Everyday',
        notes: 'End this To Do App',
        listName: 'Work',
      },
    ],
  },
  {
    name: 'House',
    nTasks: 5,
    nTasksCompleted: 4,
    description: '',
    tasks: [
      {
        name: 'Prepare dinner',
        completed: true,
        important: false,
        date: '',
        repeat: 'One time',
        notes: '',
        listName: 'House',
      },
    ],
  },
  {
    name: 'Whatever',
    nTasks: 12,
    nTasksCompleted: 12,
    description: '',
    tasks: [
      {
        name: 'Cut hair with barber',
        completed: false,
        important: false,
        date: '',
        repeat: 'One time',
        notes: '',
        listName: 'Whatever',
      },
      {
        name: 'Drink water',
        completed: true,
        important: true,
        repeat: 'Everyday',
        date: '',
        notes: '',
        listName: 'Whatever',
      },
    ],
  },
];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  //Lists
  const [lists, setLists] = useState(defaultLists);
  //Tasks
  const [tasks, setTasks] = useState(defaultTasks);
  //SidePanel
  const [showTaskSidePanel, setShowTaskSidePanel] = useState(false);
  //Obj selected
  const [taskSelected, setTaskSelected] = useState({});
  const [listSelected, setListSelected] = useState({});
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
  //Update lists
  const updateLists = () => {
    const newLists = [...lists];
    for (const i in newLists) {
      const newListTasks = tasks.filter(
        (task) => task.listName === newLists[i].name
      );
      newLists[i].tasks = newListTasks;
    }
    setLists(newLists);
  };
  //Complete or uncomplete tasks
  const completeTask = (name) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.name === name);
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  //Make tasks Important or not
  const makeImportantTask = (name) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.name === name);
    newTasks[index].important = !newTasks[index].important;
    setTasks(newTasks);
  };
  //Edit task
  const editTask = (editedTask) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.name === editTask.name);
    newTasks[index] = editedTask;
    setTasks(newTasks);
    updateLists();
  };
  //Delete task
  const deleteTask = (name) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.name === name);
    newTasks.splice(index, 1);
    setTasks(newTasks);
    updateLists();
  };
  //Delete list
  const deleteList = (listName) => {
    const newTasks = tasks.filter((task) => task.listName !== listName);
    setTasks(newTasks);
    const newLists = [...lists];
    const index = newLists.findIndex((list) => list.name === listName);
    newLists.splice(index, 1);
    setLists(newLists);
  };
  //ChangeTaskSelected
  const changeTaskSelected = (name) => {
    const index = tasks.findIndex((task) => task.name === name);
    setTaskSelected(tasks[index]);
    setShowTaskSidePanel(true);
  };
  //ChangeListSelected
  const changeListSelected = (name) => {
    setActiveSearch(false);
    const index = lists.findIndex((list) => list.name === name);
    setListSelected(lists[index]);
    navigate('/list-info');
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

      case '/list-info':
        return 'List';

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
              onImportantClick={makeImportantTask}
              changeTaskSelected={changeTaskSelected}
              changeListSelected={changeListSelected}
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
              onImportantClick={makeImportantTask}
              changeTaskSelected={changeTaskSelected}
            />
          }
        />
        <Route
          path="/important"
          element={
            <Important
              tasks={tasks}
              setTasks={setTasks}
              onCompleteClick={completeTask}
              onImportantClick={makeImportantTask}
              changeTaskSelected={changeTaskSelected}
            />
          }
        />
        <Route
          path="/lists"
          element={
            <MyLists
              lists={lists}
              setLists={setLists}
              tasks={tasks}
              changeListSelected={changeListSelected}
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
              onImportantClick={makeImportantTask}
              changeTaskSelected={changeTaskSelected}
              changeListSelected={changeListSelected}
            />
          }
        />
        <Route
          path="/list-info"
          element={
            <ListPage
              lists={lists}
              list={listSelected}
              deleteList={deleteList}
              onCompleteClick={completeTask}
              onImportantClick={makeImportantTask}
              changeTaskSelected={changeTaskSelected}
              onDelete={() => deleteList(listSelected.name)}
            />
          }
        />
      </Routes>
      {showTaskSidePanel && tasks.includes(taskSelected) ? (
        <TaskSidePanel
          lists={lists}
          obj={taskSelected}
          show={showTaskSidePanel}
          setShow={setShowTaskSidePanel}
          onEdit={editTask}
          onDelete={() => deleteTask(taskSelected.name)}
        />
      ) : null}
    </>
  );
}

export default App;
