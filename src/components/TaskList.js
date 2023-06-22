import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
function TaskList(props) {
  // const handleTaskClick = (e) => {
  //   if (e.nativeEvent.button === 0) {
  //     console.log('Left click');
  //   } else if (e.nativeEvent.button === 2) {
  //     e.preventDefault();
  //     console.log('Right click');
  //   }
  // };
  return (
    <div class="task-list-container">
      <h2 className="title m-4 lg">Tasks</h2>
      <div class="task-list">
        <div class="task-item flex mb-4 items-center">
          <button class="flex-no-shrink p-2 ml-4 mr-2 rounded ">
            <FontAwesomeIcon className="icon" icon={faCircle} />
          </button>
          <p class="w-full">Take the coat to dry cleaning</p>
        </div>
      </div>
      <div class="task-list">
        <div class="task-item flex mb-4 items-center shadow">
          <button class="flex-no-shrink p-2 ml-4 mr-2 rounded ">
            <FontAwesomeIcon className="icon" icon={faCircleCheck} />
          </button>
          <p class="w-full line-through">Take the coat to dry cleaning</p>
        </div>
      </div>
    </div>
  );
}

export { TaskList };
