import React from 'react';
import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';
import { ListsContainer } from '../components/ListsContainer';
import { ListItem } from '../components/ListItem';
import SearchIcon from '../components/SearchIcon';

function Search({ searchValue, tasks, lists, tasksLenght, listsLenght }) {
  const emptyTasks = tasksLenght === 0;
  const emptyLists = listsLenght === 0;
  const emptySearchValue = searchValue === '';

  return (
    <div className="search-container">
      {emptyLists && emptyTasks && !emptySearchValue ? (
        <div className="fixed h-full w-full flex flex-col justify-center items-center">
          <SearchIcon />
          <h2 className="title">We couldn't find what you're looking for.</h2>
        </div>
      ) : null}

      {emptySearchValue ? (
        <div className="fixed h-full w-full flex flex-col justify-center items-center">
          <SearchIcon />
          <h2 className="title">What would you like to find?</h2>
        </div>
      ) : null}

      {emptyLists || emptySearchValue ? null : (
        <ListsContainer>
          {lists.map((list) => (
            <ListItem
              key={list.name}
              name={list.name}
              nTasks={list.nTasks}
              nTasksCompleted={list.nTasksCompleted}
              description={list.description}
            />
          ))}
        </ListsContainer>
      )}
      {emptyTasks || emptySearchValue ? null : (
        <TaskList>
          {tasks.map((task) => (
            <TaskItem
              key={task.text}
              text={task.text}
              completed={task.completed}
              repeat={task.repeat}
              date={task.date}
              important={task.important}
              notes={task.notes}
            />
          ))}
        </TaskList>
      )}
      <footer className="footer">
        <a href="https://storyset.com/web">
          Icon made by Freepik from www.flaticon.com
        </a>
      </footer>
    </div>
  );
}

export { Search };
