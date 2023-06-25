import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function AddTaskModal(props) {
  const [dateExpired, setDateExpired] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const handleClose = () => props.setShow(false);
  // const handleShow = () => props.setShow(true);

  const handleDateChange = (e) => {
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

  return (
    <>
      <Modal
        className="add-modal"
        show={props.show}
        onHide={handleClose}
        keyboard={false}
        backdrop="static"
        animation={true}
        // closeTimeoutMS={10000}
      >
        <Modal.Header className="add-modal__header">
          <Modal.Title>Add a task</Modal.Title>
          <FontAwesomeIcon
            icon={faX}
            onClick={handleClose}
            style={{ cursor: 'pointer' }}
          />
        </Modal.Header>
        <Modal.Body className="add-modal__body">
          <form className=" rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name *
              </label>
              <input
                className="input shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Task name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="duedate"
              >
                Due Date {selectedDate}
                <span className={dateExpired ? 'expired-msg alert' : 'hide'}>
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
              <select name="select repeat">
                <option value="Only one time">Only one time</option>
                <option value="Everyday">Everyday</option>
                <option value="Every week">Every week</option>
                <option value="Custom">Custom</option>
              </select>
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
              />
            </div>
          </form>
          <button
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
            form="addtask"
          >
            add task
          </button>
        </Modal.Body>
        {/* <Modal.Footer className="add-task-modal__footer"></Modal.Footer> */}
      </Modal>
    </>
  );
}
export { AddTaskModal };
