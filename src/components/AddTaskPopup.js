import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-regular-svg-icons';
// import { faStar as solidFaStar } from '@fortawesome/free-solid-svg-icons';

function AddTaskPopup(props) {
  // const [Favorite, setFavorite] = useState(false);
  // const handleStarClick = () => {
  //   setFavorite(!Favorite);
  // };
  return props.trigger ? (
    <div className="add-task-popup">
      <div className="add-task-popup__inner">
        <header className="header">
          <h3 className="title">Add a new task</h3>
          {/* <figure
          className="close-button"
          onClick={() => props.setTrigger(false)}
        >
          <FontAwesomeIcon className="icon" icon={faXmark} />
        </figure> */}
        </header>

        <div className="sector">
          <div className="form-group">
            <label> Name </label>
            <input
              type="text"
              name="taskname"
              className="form-style"
              placeholder=""
              autoComplete="off"
            />
          </div>

          <div className="form-group ">
            <label> Date </label>
            <input
              type="date"
              name="taskdate"
              className="form-style"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label> Description </label>
            <input
              type="text"
              name="taskdescription"
              className="form-style"
              placeholder=""
              autoComplete="off"
            />
          </div>

          <a href="/" className="submit-btn ">
            create task
          </a>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export { AddTaskPopup };
