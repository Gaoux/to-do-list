import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
function AddTaskModal(props) {
  const handleClose = () => props.setShow(false);
  // const handleShow = () => props.setShow(true);

  return (
    <>
      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="add-task-modal"
      >
        <Modal.Header className="add-task-modal__header">
          <Modal.Title>Add a task</Modal.Title>
          <FontAwesomeIcon
            icon={faX}
            onClick={handleClose}
            style={{ cursor: 'pointer' }}
          />
        </Modal.Header>
        <Modal.Body className="add-task-modal__body">
          <form class=" rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Task name"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="description"
              >
                Description
              </label>
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
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
