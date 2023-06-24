import React from 'react';

function ListsContainer(props) {
  return (
    <div className="list-container">
      <h2 className="title m-4 lg">Lists</h2>
      <div className="list-list flex overflow-x-auto">
        <div className="flex align-center justify-center flex-nowrap">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export { ListsContainer };
