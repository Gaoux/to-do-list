import React from 'react';
import { useNavigate } from 'react-router-dom';

function ListsContainer(props) {
  const navigate = useNavigate();
  return (
    <div className="list-container">
      <h2
        className="title m-4 lg cursor-pointer hover:opacity-50"
        onClick={() => navigate('/lists')}
      >
        Lists ({props.children.length})
      </h2>
      <div className="list-list flex overflow-x-auto">
        <div className="flex align-center justify-center flex-nowrap">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export { ListsContainer };
