import React, { useContext } from 'react';
import { TaskList } from '../../components/TaskList';
import { TaskItem } from '../../components/TaskItem';
import { ListsContainer } from '../../components/ListsContainer';
import { ListItem } from '../../components/ListItem';
import SearchIcon from './SearchIcon';
import { TodoContext } from '../../TodoContext';

function Search() {
  const {
    searchValue,
    searchTasks,
    searchLists,
    completeTask,
    makeTaskImportant,
    changeTaskSelected,
    changeListSelected,
  } = useContext(TodoContext);
  const tasksLenght = searchTasks.length;
  const listsLenght = searchLists.length;

  const emptyTasks = tasksLenght === 0;
  const emptyLists = listsLenght === 0;
  const emptySearchValue = searchValue === '';

  return (
    <div className="search-container">
      {emptyLists && emptyTasks && !emptySearchValue ? (
        <div className="icon-container fixed h-full w-full flex flex-col justify-center items-center">
          <SearchIcon />
          <h2 className="title">We couldn't find what you're looking for.</h2>
        </div>
      ) : null}

      {emptySearchValue ? (
        <div className="icon-container  h-full w-full flex flex-col justify-center items-center">
          <SearchIcon />
          <h2 className="title">What would you like to find?</h2>
        </div>
      ) : null}

      {emptyLists || emptySearchValue ? null : (
        <ListsContainer>
          {searchLists.map((list) => (
            <ListItem
              key={list.name}
              name={list.name}
              nTasks={list.nTasks}
              nTasksCompleted={list.nTasksCompleted}
              description={list.description}
              openInfo={() => changeListSelected(list.name)}
            />
          ))}
        </ListsContainer>
      )}
      {emptyTasks || emptySearchValue ? null : (
        <TaskList completeTask={completeTask}>
          {searchTasks.map((task) => (
            <TaskItem
              key={task.name}
              name={task.name}
              completed={task.completed}
              repeat={task.repeat}
              date={task.date}
              important={task.important}
              notes={task.notes}
              completeTask={() => completeTask(task.name)}
              makeTaskImportant={() => makeTaskImportant(task.name)}
              openInfo={() => changeTaskSelected(task.name)}
            />
          ))}
        </TaskList>
      )}
      {(emptyTasks || emptySearchValue) && (
        <footer className="footer">
          <a href="https://storyset.com/web">
            Icon made by Freepik from www.flaticon.com
          </a>
        </footer>
      )}
    </div>
  );
}

export { Search };
