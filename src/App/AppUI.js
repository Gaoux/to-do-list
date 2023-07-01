import { Navbar } from '../components/layout/Navbar';
import { Home } from '../pages/Home';
import { MyTasks } from '../pages/MyTasks';
import { MyLists } from '../pages/MyLists';
import { Important } from '../pages/Important';
import { MyAccount } from '../pages/MyAccount';
import { Search } from '../pages/Search';
import { ListPage } from '../pages/ListPage';
import { TaskSidePanel } from '../components/TaskSidePanel';
import { Loading } from '../components/Loading';
import { Routes, Route } from 'react-router-dom';
import { TodoContext } from '../TodoContext';
import React, { useContext } from 'react';

function AppUI() {
  const {
    loadingTasks,
    loadingLists,
    loadingListSelected,
    // errorTasks,
    // errorLists,
    //errorListSelected,
  } = useContext(TodoContext);

  return (
    <>
      {/* {(errorTasks || errorLists) && <p>Error</p>}
      {!loadingTasks && tasks.length === 0 && <p>Create your first tasks</p>} */}
      <Navbar />
      {loadingTasks || loadingLists ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<MyTasks />} />
          <Route path="/important" element={<Important />} />
          <Route path="/lists" element={<MyLists />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/search" element={<Search />} />
          {loadingListSelected ? (
            <Loading />
          ) : (
            <Route path="/list-info" element={<ListPage />} />
          )}
        </Routes>
      )}

      <TaskSidePanel />
    </>
  );
}

export { AppUI };
