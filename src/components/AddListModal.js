import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function AddListModal(props) {
  const handleClose = () => props.setShow(false);
  return (
    <>
      <Modal
        className="add-modal"
        show={props.show}
        onHide={handleClose}
        keyboard={false}
        backdrop="static"
        animation={true}
      >
        <Modal.Header className="add-modal__header">
          <Modal.Title>Create a List</Modal.Title>
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
                placeholder="List name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                List description (optional)
              </label>
              <textarea
                className="input shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="Say something about the list"
              />
            </div>
          </form>
          <button
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
            form="addtask"
          >
            add list
          </button>
        </Modal.Body>
        {/* <Modal.Footer className="add-task-modal__footer"></Modal.Footer> */}
      </Modal>
    </>
  );
}

export { AddListModal };
