import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';

function TaskItem(props) {
  return (
    <div className="task-list">
      <div className="task-item flex mb-4 items-center wrap">
        <button
          onClick={props.onCompleteClick}
          className="flex-no-shrink p-2 ml-4 mr-2 rounded "
        >
          <FontAwesomeIcon
            className="icon"
            icon={props.completed ? faCircleCheck : faCircle}
          />
        </button>
        <p
          className={`w-full break-word whitespace-pre-wrap ${
            props.completed && 'line-through'
          }`}
        >
          {props.name}
        </p>
        <FontAwesomeIcon
          className={`star icon mr-3 ${props.important && 'star--checked'}`}
          icon={props.important ? faSolidStar : faStar}
          // onClick={handleStarClick}
        />
      </div>
    </div>
  );
}

export { TaskItem };
