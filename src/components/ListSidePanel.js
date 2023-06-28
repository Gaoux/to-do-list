import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';

function ListSidePanel(props) {
  const obj = props.obj;
  const handleClose = () => props.setShow(false);

  const handleDescriptionChange = (e) => {
    obj.description = e.target.value;
    props.onEdit(obj);
  };

  return (
    <div className="side-panel d-flex flex-column flex-shrink-0 p-3 ">
      <svg className="bi me-2" width="40" height="32">
        <use xlinkHref="#bootstrap"></use>
      </svg>
      <div className="header flex justify-between">
        <span className="fs-4 mb-2"> {obj.name} </span>

        <FontAwesomeIcon
          icon={faX}
          className="mr-5"
          onClick={handleClose}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <hr />

      <form className=" rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          <label className="block  text-sm font-bold mb-2" htmlFor="notes">
            Description
          </label>
          <textarea
            className="input notes"
            value={obj.description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <TaskList onCompleteClick={props.onCompleteClick}>
          {obj.tasks.map((task) => (
            <TaskItem
              key={task.name}
              name={task.name}
              completed={task.completed}
              repeat={task.repeat}
              date={task.date}
              important={task.important}
              notes={task.notes}
              onCompleteClick={() => props.onCompleteClick(task.name)}
              onImportantClick={() => props.onImportantClick(task.name)}
              openInfo={() => props.changeObjSelected(task.name, 'task')}
            />
          ))}
        </TaskList>
      </form>

      <div className="dropdown">
        <button
          className="delete font-bold py-2 px-4 rounded"
          onClick={() => {
            props.onDelete();
            props.setShow(false);
          }}
        >
          Delete <FontAwesomeIcon className="ml-2" icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default ListSidePanel;
