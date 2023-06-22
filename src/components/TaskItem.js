import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function TaskItem(props) {
  return (
    <div className="task-list">
      <div className="task-item flex mb-4 items-center">
        <button className="flex-no-shrink p-2 ml-4 mr-2 rounded ">
          <FontAwesomeIcon
            className="icon"
            icon={props.completed ? faCircleCheck : faCircle}
          />
        </button>
        <p className={`w-full ${props.completed && 'line-through'}`}>
          {props.text}
        </p>
      </div>
    </div>
  );
}

export { TaskItem };
