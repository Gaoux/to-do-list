import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';

function AddListModal({ show, setShow }) {
  const { lists, addList } = useContext(TodoContext);
  const [newList, setNewList] = useState({
    name: '',
    description: '',
    nTasks: 0,
    nTasksCompleted: 0,
    tasks: [],
  });
  const handleClose = () => setShow(false);
  const [showAlreadyExistsAlert, setShowAlreadyExistsAlert] = useState(false);

  const handleNameChange = (e) => {
    const nameAlreadyExists = lists.some(
      (list) => list.name.toLowerCase() === e.target.value.toLowerCase()
    );
    if (nameAlreadyExists) setShowAlreadyExistsAlert(true);
    else setShowAlreadyExistsAlert(false);

    setNewList((newList) => ({
      ...newList,
      name: e.target.value,
    }));
  };
  const handleDescriptionChange = (e) => {
    setNewList((newList) => ({
      ...newList,
      description: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addList(newList);
    setShow(false);
  };

  return (
    <>
      <Modal
        className="add-modal"
        show={show}
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
                  List name already exists
                </span>
              </label>
              <input
                className={`input shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  showAlreadyExistsAlert && 'border-alert'
                }`}
                id="name"
                type="text"
                value={newList.name}
                onChange={handleNameChange}
                placeholder="List name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="input shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                value={newList.description}
                onChange={handleDescriptionChange}
                placeholder="Say something about the list"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
              disabled={showAlreadyExistsAlert}
            >
              add list
            </button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer className="add-task-modal__footer"></Modal.Footer> */}
      </Modal>
    </>
  );
}

export { AddListModal };
