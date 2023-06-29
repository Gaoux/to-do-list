import { Navbar } from '../components/layout/Navbar';
import { Home } from '../pages/Home';
import { MyTasks } from '../pages/MyTasks';
import { MyLists } from '../pages/MyLists';
import { Important } from '../pages/Important';
import { MyAccount } from '../pages/MyAccount';
import { Search } from '../pages/SearchPage';
import { ListPage } from '../pages/ListPage';
import TaskSidePanel from '../components/TaskSidePanel';
import { Loading } from '../components/Loading';
import { Routes, Route } from 'react-router-dom';
import { TodoContext } from '../ToDoContext';
import React from 'react';

function AppUI() {
  return (
    <TodoContext.Consumer>
      {({
        loadingTasks,
        loadingLists,
        errorTasks,
        errorLists,
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
        makeImportantTask,
        changeTaskSelected,
        changeListSelected,
        searchLists,
        searchTasks,
        deleteTask,
        deleteList,
        editTask,
        updateListTask,
      }) => (
        <>
          {' '}
          <Navbar
            activeSearch={activeSearch}
            setActiveSearch={setActiveSearch}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            title={pageTitle}
          />
          {(loadingTasks || loadingLists) && <Loading />}
          {(errorTasks || errorLists) && <p>Error</p>}
          {!loadingTasks && tasks.length === 0 && (
            <p>Create your first tasks</p>
          )}
          {!loadingTasks && !loadingLists && (
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    lists={lists}
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
                    tasks={tasks}
                    changeListSelected={changeListSelected}
                  />
                }
              />
              <Route path="/account" element={<MyAccount tasks={tasks} />} />
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
                    tasks={tasks}
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
          )}
          {showTaskSidePanel && tasks.includes(taskSelected) ? (
            <TaskSidePanel
              lists={lists}
              updateListTask={updateListTask}
              obj={taskSelected}
              show={showTaskSidePanel}
              setShow={setShowTaskSidePanel}
              onEdit={editTask}
              onDelete={() => deleteTask(taskSelected.name)}
            />
          ) : null}
        </>
      )}
    </TodoContext.Consumer>
  );
}

export { AppUI };
