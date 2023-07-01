import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../TodoContext';

function AddTaskModal({ show, setShow }) {
  const { tasks, addTask, listSelected, location, addTaskToList } =
    useContext(TodoContext);
  const [dateExpired, setDateExpired] = useState(false);

  const [newTask, setNewTask] = useState({
    name: '',
    completed: false,
    important: false,
    date: '',
    repeat: 'One time',
    notes: '',
    listName: location.pathname === '/list-info' ? listSelected.name : '',
  });

  const [showAlreadyExistsAlert, setShowAlreadyExistsAlert] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    setNewTask({
      name: '',
      completed: false,
      important: false,
      date: '',
      repeat: 'One time',
      notes: '',
      listName: location.pathname === '/list-info' ? listSelected.name : '',
    });
  }, [show, location.pathname, listSelected]);

  const handleNameChange = (e) => {
    const nameAlreadyExists = tasks.some(
      (task) => task.name.toLowerCase() === e.target.value.toLowerCase()
    );
    if (nameAlreadyExists) setShowAlreadyExistsAlert(true);
    else setShowAlreadyExistsAlert(false);

    setNewTask((newTask) => ({
      ...newTask,
      name: e.target.value,
    }));
  };
  const handleRepeatChange = (e) => {
    setNewTask((newTask) => ({
      ...newTask,
      repeat: e.target.value,
    }));
  };
  const handleDateChange = (e) => {
    setNewTask((newTask) => ({
      ...newTask,
      date: e.target.value,
    }));
    //Current Date
    var currDate = new Date();
    currDate.setDate(currDate.getDate());
    //Date selected on input
    var dateSelected = new Date(e.target.value);
    dateSelected.setDate(dateSelected.getDate() + 1);
    //Calculate Difference in days from the selected date and the actual date
    var Difference_In_Time = dateSelected.getTime() - currDate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    Difference_In_Days = Math.round(Difference_In_Days);

    if (Difference_In_Days < 0) {
      setDateExpired(true);
      setSelectedDate('');
    } else {
      setDateExpired(false);
      if (Difference_In_Days === 0) setSelectedDate('(Today)');
      else if (Difference_In_Days === 1) setSelectedDate('(Tomorrow)');
      else if (Difference_In_Days < 7) setSelectedDate('(This week)');
      else if (Difference_In_Days < 30) setSelectedDate('(This month)');
      else if (Difference_In_Days < 60) setSelectedDate('(Next month)');
      else setSelectedDate('');
    }
  };
  const handleNotesChange = (e) => {
    setNewTask((newTask) => ({
      ...newTask,
      notes: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (location.pathname === '/list-info') {
      addTaskToList(listSelected.name, newTask.name);
    }
    addTask(newTask);
    handleClose();
  };

  return (
    <>
      <Modal
        className="add-modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        animation={true}
      >
        <Modal.Header className="add-modal__header">
          <Modal.Title>Add a task</Modal.Title>
          <FontAwesomeIcon
            className="icon"
            icon={faX}
            onClick={handleClose}
            style={{ cursor: 'pointer' }}
          />
        </Modal.Header>
        <Modal.Body className="add-modal__body">
          <form className=" rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
                <span
                  className={`msg-alert ${!showAlreadyExistsAlert && 'hide'}`}
                >
                  Task name already exists
                </span>
              </label>
              <input
                className={`input shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  showAlreadyExistsAlert && 'border-alert'
                }`}
                id="name"
                type="text"
                placeholder="Task name"
                value={newTask.name}
                onChange={handleNameChange}
                required
              />
            </div>

            <div className="repeat-section mb-4 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="duedate"
              >
                Due Date {selectedDate}
                <span className={`msg-alert ${!dateExpired && 'hide'}`}>
                  Task has already expired
                </span>
              </label>

              <input
                className={`input shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  dateExpired && 'alert'
                }`}
                // className="input shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="duedate"
                type="date"
                value={newTask.date}
                onChange={handleDateChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="repeat"
              >
                Repeat *
              </label>
              <div className="radio-button-container flex justify-left">
                <div className="radio-button my-2 ml-2 mr-10">
                  <input
                    className="radio-button__input"
                    type="radio"
                    id="one-time"
                    name="repeat"
                    defaultChecked
                    value="One time"
                    onChange={handleRepeatChange}
                  />
                  <label
                    className="radio-button__label ml-2 cursor-pointer"
                    htmlFor="one-time"
                  >
                    <span className="radio-button__custom"></span>
                    One Time
                  </label>
                </div>
                <div className="radio-button my-2 mr-6">
                  <input
                    className="radio-button__input"
                    type="radio"
                    id="everyday"
                    name="repeat"
                    value="Everyday"
                    onChange={handleRepeatChange}
                  />
                  <label
                    className="radio-button__label ml-2 cursor-pointer"
                    htmlFor="everyday"
                  >
                    <span className="radio-button__custom"></span>
                    Everyday
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="notes"
              >
                Task notes
              </label>
              <textarea
                className="input shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="notes"
                type="text"
                placeholder="Say something about the task"
                value={newTask.notes}
                onChange={handleNotesChange}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
              disabled={showAlreadyExistsAlert}
            >
              add task
            </button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer className="add-task-modal__footer"></Modal.Footer> */}
      </Modal>
    </>
  );
}
export { AddTaskModal };
