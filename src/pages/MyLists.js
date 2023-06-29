import React, { useState } from 'react';
import { AddButton } from '../components/AddButton';
import { AddListModal } from '../components/AddListModal';
import { ListItem } from '../components/ListItem';

function MyLists({ lists, setLists, changeListSelected }) {
  const [activeAddList, setActiveAddList] = useState(false);
  return (
    <>
      <div className="list-container lists-container-lists-page">
        <h2 className="title m-4 lg">Lists</h2>
        <div className="list-list justify-center flex overflow-x-auto">
          <div className="flex align-center flex-col justify-center flex-wrap">
            {lists.map((list) => (
              <ListItem
                key={list.name}
                name={list.name}
                nTasks={list.nTasks}
                nTasksCompleted={list.nTasksCompleted}
                description={list.description}
                openInfo={() => changeListSelected(list.name)}
              />
            ))}
          </div>
        </div>
      </div>
      <AddButton active={activeAddList} setActive={setActiveAddList} />
      <AddListModal
        lists={lists}
        setLists={setLists}
        show={activeAddList}
        setShow={setActiveAddList}
      />
    </>
  );
}

export { MyLists };
