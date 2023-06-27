import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons';

function TaskSidePanel(props) {
  const obj = props.obj;
  const handleClose = () => props.setShow(false);

  const handleDateChange = (e) => {
    obj.date = e.target.value;
    props.onEdit(obj);
  };
  const handleRepeatChange = (e) => {
    obj.repeat = e.target.value;
    props.onEdit(obj);
  };
  const handleListNameChange = (e) => {
    obj.listName = e.target.value;
    props.onEdit(obj);
  };
  const handleNotesChange = (e) => {
    obj.notes = e.target.value;
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
        <div className="repeat-section mb-10 flex flex-col">
          <label className="block  text-sm font-bold mb-2" htmlFor="duedate">
            Due Date
          </label>
          <input
            className="input "
            type="date"
            value={obj.date}
            onChange={handleDateChange}
          />
        </div>
        <div className="mb-10">
          <label className="block  text-sm font-bold mb-2" htmlFor="repeat">
            Repeat
          </label>
          <select
            className="input"
            name="repeat"
            value={obj.repeat}
            onChange={handleRepeatChange}
          >
            <option value="One Time">One Time</option>
            <option value="Everyday"> Everyday</option>
          </select>
        </div>
        <div className="mb-10">
          <label className="block  text-sm font-bold mb-2" htmlFor="notes">
            List
          </label>
          <select
            className="input"
            name="list"
            value={obj.listName}
            onChange={handleListNameChange}
          >
            <option value="None">None</option>
            {props.lists.map((list) => (
              <option key={list.name} value={list.name}>
                {' '}
                {list.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-10">
          <label className="block  text-sm font-bold mb-2" htmlFor="notes">
            Task notes
          </label>
          <textarea
            className="input notes"
            value={obj.notes}
            onChange={handleNotesChange}
          ></textarea>
        </div>
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

export default TaskSidePanel;
