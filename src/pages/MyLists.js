import React, { useState } from 'react';
import { AddButton } from '../components/AddButton';
import { AddListModal } from '../components/AddListModal';

function MyLists({ lists, setLists }) {
  const [activeAddList, setActiveAddList] = useState(false);
  return (
    <>
      <div className="list-container">
        <h2 className="title m-4 lg">Lists</h2>
        <div className="list-list ml-10 flex overflow-x-auto">
          <div className="flex align-center flex-col justify-center flex-nowrap">
            <div className="list-item rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <p className="n-tasks text-base">5 tasks</p>
                <div className="name font-bold text-xl mb-2">Home</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-orange-600 h-2.5 rounded-full"
                    style={{ width: '20%' }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="list-item rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <p className="n-tasks text-base">12 tasks</p>
                <div className="name font-bold text-xl mb-2">Work</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="list-item rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <p className="n-tasks text-base">2 tasks</p>
                <div className="name font-bold text-xl mb-2">Whatever</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-yellow-600 h-2.5 rounded-full"
                    style={{ width: '50%' }}
                  ></div>
                </div>
              </div>
            </div>
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
