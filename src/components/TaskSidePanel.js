import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from '../TodoContext';

function TaskSidePanel() {
  const {
    tasks,
    lists,
    taskSelected,
    updateListTask,
    showTaskSidePanel,
    setShowTaskSidePanel,
    editTask,
    deleteTask,
  } = useContext(TodoContext);
  const handleClose = () => setShowTaskSidePanel(false);

  const handleDateChange = (e) => {
    taskSelected.date = e.target.value;
    editTask(taskSelected);
  };
  const handleRepeatChange = (e) => {
    taskSelected.repeat = e.target.value;
    editTask(taskSelected);
  };
  const handleListNameChange = (e) => {
    updateListTask(taskSelected.listName, e.target.value, taskSelected.name);
    taskSelected.listName = e.target.value;
    editTask(taskSelected);
  };
  const handleNotesChange = (e) => {
    taskSelected.notes = e.target.value;
    editTask(taskSelected);
  };

  return (
    <div
      className={`side-panel d-flex flex-column flex-shrink-0 p-3 ${
        showTaskSidePanel &&
        tasks.includes(taskSelected) &&
        'side-panel--active'
      }`}
    >
      <svg className="bi me-2" width="40" height="32">
        <use xlinkHref="#bootstrap"></use>
      </svg>
      <div className="header flex justify-between">
        <span className="fs-4 mb-2"> {taskSelected.name} </span>

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
            value={taskSelected.date || ''}
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
            value={taskSelected.repeat}
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
            value={taskSelected.listName}
            onChange={handleListNameChange}
          >
            <option value=""></option>
            {lists.map((list) => (
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
            value={taskSelected.notes}
            onChange={handleNotesChange}
          ></textarea>
        </div>
      </form>

      <div className="dropdown">
        <button
          className="delete font-bold py-2 px-4 rounded"
          onClick={() => {
            deleteTask(taskSelected.name);
            setShowTaskSidePanel(false);
          }}
        >
          Delete <FontAwesomeIcon className="ml-2" icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export { TaskSidePanel };
