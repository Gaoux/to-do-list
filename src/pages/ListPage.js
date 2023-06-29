import React, { useState } from 'react';
import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';
import { AddButton } from '../components/AddButton';
import { AddTaskModal } from '../components/AddTaskModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function ListPage({
  list,
  tasks,
  onCompleteClick,
  onImportantClick,
  changeTaskSelected,
  onDelete,
}) {
  const listTasks = tasks.filter((task) => task.listName === list.name);
  const navigate = useNavigate();
  //Add task modal
  const [activeAddTask, setActiveAddTask] = useState(false);
  return (
    <div className="list-info-container">
      <div className="list-title lg">
        <FontAwesomeIcon icon={faList} className="mr-3" />
        <h2>{list.name}</h2>
        <button
          className="delete font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate(-1);
            onDelete();
          }}
        >
          Delete list <FontAwesomeIcon className="ml-2" icon={faTrash} />
        </button>
      </div>
      <TaskList onCompleteClick={onCompleteClick}>
        {listTasks.map((task) => (
          <TaskItem
            key={task.name}
            name={task.name}
            completed={task.completed}
            repeat={task.repeat}
            date={task.date}
            important={task.important}
            notes={task.notes}
            onCompleteClick={() => onCompleteClick(task.name)}
            onImportantClick={() => onImportantClick(task.name)}
            openInfo={() => changeTaskSelected(task.name)}
          />
        ))}
      </TaskList>
      <AddButton active={activeAddTask} setActive={setActiveAddTask} />
      <AddTaskModal show={activeAddTask} setShow={setActiveAddTask} />
    </div>
  );
}

export { ListPage };
