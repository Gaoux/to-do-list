import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons';

function TaskSidePanel(props) {
  const handleClose = () => props.setShow(false);
  const obj = props.obj;
  let date = 'None';
  if (obj.date) {
    date =
      obj.date.getMonth() +
      '/' +
      obj.date.getDate() +
      '/' +
      obj.date.getFullYear();
  }
  return (
    <div className="side-panel d-flex flex-column flex-shrink-0 p-3 ">
      <svg className="bi me-2" width="40" height="32">
        <use xlinkHref="#bootstrap"></use>
      </svg>
      <div className="header flex justify-between">
        <span className="fs-4 mb-2"> Task </span>

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
          <label className="block  text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <p className="value">{obj.name}</p>
        </div>

        <div className="repeat-section mb-10 flex flex-col">
          <label className="block  text-sm font-bold mb-2" htmlFor="duedate">
            Due Date
          </label>
          <p className="value">{date}</p>
        </div>
        <div className="mb-10">
          <label className="block  text-sm font-bold mb-2" htmlFor="repeat">
            Repeat
          </label>
          <p className="value">{obj.repeat}</p>
        </div>
        <div className="mb-10">
          <label className="block  text-sm font-bold mb-2" htmlFor="notes">
            Task notes
          </label>
          <p className="value notes">{obj.notes}</p>
        </div>
      </form>

      <div className="dropdown">
        <button
          className=" font-bold py-2 px-4 rounded"
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

export default TaskSidePanel;
