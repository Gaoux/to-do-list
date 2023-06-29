import React, { useContext, useState } from 'react';
import { AddButton } from '../../components/ui/AddButton';
import { AddListModal } from './AddListModal';
import { ListItem } from '../../components/ListItem';
import { TodoContext } from '../../TodoContext';

function MyLists() {
  const { lists, changeListSelected } = useContext(TodoContext);
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
                openInfo={() => changeListSelected(list.name)}
              />
            ))}
          </div>
        </div>
      </div>
      <AddButton active={activeAddList} setActive={setActiveAddList} />
      <AddListModal show={activeAddList} setShow={setActiveAddList} />
    </>
  );
}

export { MyLists };
