import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

const defaultTasks = [
  {
    name: 'Finish this React App',
    completed: true,
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
    name: 'Eat with family',
    completed: false,
    important: false,
    date: '',
    repeat: 'One time',
    notes: '',
    listName: 'Whatever',
  },
  {
    name: 'Drink water',
    completed: false,
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
    listName: 'Work',
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
    description: 'Work things',
    nTasks: 2,
    nTasksCompleted: 1,
    tasks: ['Finish this React App', 'Go to the gym'],
  },
  {
    name: 'House',
    description: 'House dutys',
    nTasks: 1,
    nTasksCompleted: 1,
    tasks: ['Prepare dinner'],
  },
  {
    name: 'Whatever',
    description: '',
    nTasks: 3,
    nTasksCompleted: 1,
    tasks: ['Cut hair with barber', 'Eat with family', 'Drink water'],
  },
];

function TodoProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  //Tasks
  const {
    item: tasks,
    saveItem: saveTasks,
    loading: loadingTasks,
    error: errorTasks,
  } = useLocalStorage('TASKS_V1', defaultTasks);
  //Lists
  const {
    item: lists,
    saveItem: saveLists,
    loading: loadingLists,
    error: errorLists,
  } = useLocalStorage('LISTS_V1', defaultLists);
  //Navbar title
  const [pageTitle, setPageTitle] = useState('Home');
  //SidePanel
  const [showTaskSidePanel, setShowTaskSidePanel] = useState(false);
  //Obj selected
  const [taskSelected, setTaskSelected] = useState({});
  const {
    item: listSelected,
    saveItem: saveListSelected,
    loading: loadingListSelected,
    error: errorListSelected,
  } = useLocalStorage('LISTSELECTED_V1', {});
  //Search
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  //Update navbar title on navigate
  useEffect(() => {
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
    const newPageTitle = changeTitle();
    setPageTitle(newPageTitle);
  }, [location]);
  // const pageTitle = changeTitle();

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
  const updateListTask = (previousListName, newListName, taskName) => {
    const newLists = [...lists];
    //Delete task from previous list if it was in one
    const indexOfPrevious = newLists.findIndex(
      (list) => list.name === previousListName
    );
    const taskIndex = tasks.findIndex((task) => task.name === taskName);
    if (indexOfPrevious > -1) {
      newLists[indexOfPrevious].tasks = newLists[indexOfPrevious].tasks.filter(
        (task) => task !== taskName
      );
      newLists[indexOfPrevious].nTasks--;
      if (tasks[taskIndex].completed === true) {
        newLists[indexOfPrevious].nTasksCompleted--;
      }
    }
    //Add task to new list if added to one
    const index = newLists.findIndex((list) => list.name === newListName);
    if (index > -1) {
      newLists[index].tasks.push(taskName);

      newLists[index].nTasks++;
      if (tasks[taskIndex].completed === true) {
        newLists[index].nTasksCompleted++;
      }
    }
    saveLists(newLists);
  };
  const addTaskToList = (listName, taskName) => {
    const newLists = [...lists];
    const index = newLists.findIndex((list) => list.name === listName);
    newLists[index].tasks.push(taskName);
    newLists[index].nTasks++;
    saveLists(newLists);
  };
  //Complete or uncomplete tasks
  const completeTask = (name) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.name === name);
    newTasks[index].completed = !newTasks[index].completed;
    if (newTasks[index].listName !== '') {
      const newLists = [...lists];
      const listIndex = newLists.findIndex(
        (list) => list.name === newTasks[index].listName
      );
      newTasks[index].completed
        ? newLists[listIndex].nTasksCompleted++
        : newLists[listIndex].nTasksCompleted--;
      saveLists(newLists);
    }
    saveTasks(newTasks);
  };
  //Make tasks Important or not
  const makeTaskImportant = (name) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.name === name);
    newTasks[index].important = !newTasks[index].important;
    saveTasks(newTasks);
  };
  //Edit task
  const editTask = (editedTask) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.name === editedTask.name);
    newTasks[index] = editedTask;
    saveTasks(newTasks);
  };
  //Add task
  const addTask = (newTask) => {
    const newTasks = [...tasks];
    newTasks.push(newTask);
    saveTasks(newTasks);
  };
  //Add list
  const addList = (newList) => {
    const newLists = [...lists];
    newLists.push(newList);
    saveLists(newLists);
  };
  //Delete task
  const deleteTask = (name) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.name === name);

    //Eliminate task name from list
    const taskListName = newTasks[index].listName;
    if (taskListName !== '') {
      const newLists = [...lists];
      const listIndex = newLists.findIndex(
        (list) => list.name === taskListName
      );
      const indexOfTask = newLists[listIndex].tasks.findIndex(
        (taskName) => taskName === name
      );
      newLists[listIndex].tasks.splice(indexOfTask, 1);
      newLists[listIndex].nTasks = newLists[listIndex].tasks.length;
      if (newTasks[index].completed === true) {
        newLists[listIndex].nTasksCompleted =
          newLists[listIndex].nTasksCompleted - 1;
      }
      saveLists(newLists);
    }
    newTasks.splice(index, 1);
    saveTasks(newTasks);
  };
  //Delete list
  const deleteList = (listName) => {
    const newTasks = tasks.filter((task) => task.listName !== listName);
    saveTasks(newTasks);
    const newLists = [...lists];
    const index = newLists.findIndex((list) => list.name === listName);
    newLists.splice(index, 1);
    saveLists(newLists);
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
    saveListSelected(lists[index]);
    navigate('/list-info');
  };

  return (
    <TodoContext.Provider
      value={{
        location,
        loadingTasks,
        loadingLists,
        loadingListSelected,
        errorTasks,
        errorLists,
        errorListSelected,
        tasks,
        lists,
        showTaskSidePanel,
        setShowTaskSidePanel,
        taskSelected,
        listSelected,
        activeSearch,
        setActiveSearch,
        searchValue,
        setSearchValue,
        pageTitle,
        completeTask,
        makeTaskImportant,
        changeTaskSelected,
        changeListSelected,
        searchLists,
        searchTasks,
        addTask,
        addList,
        deleteTask,
        deleteList,
        editTask,
        updateListTask,
        addTaskToList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
