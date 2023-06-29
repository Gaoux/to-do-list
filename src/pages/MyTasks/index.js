import React, { useContext, useState } from 'react';
import { TaskList } from '../../components/TaskList';
import { TaskItem } from '../../components/TaskItem';
import { AddButton } from '../../components/ui/AddButton';
import { AddTaskModal } from '../../components/ui/AddTaskModal';
import { TodoContext } from '../../TodoContext';

function MyTasks() {
  const { tasks, completeTask, makeTaskImportant, changeTaskSelected } =
    useContext(TodoContext);
  //Add task modal
  const [activeAddTask, setActiveAddTask] = useState(false);
  return (
    <>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem
            key={task.name}
            name={task.name}
            completed={task.completed}
            repeat={task.repeat}
            date={task.date}
            important={task.important}
            notes={task.notes}
            onCompleteClick={() => completeTask(task.name)}
            onImportantClick={() => makeTaskImportant(task.name)}
            openInfo={() => changeTaskSelected(task.name, 'task')}
          />
        ))}
      </TaskList>
      <AddButton active={activeAddTask} setActive={setActiveAddTask} />
      <AddTaskModal show={activeAddTask} setShow={setActiveAddTask} />
    </>
  );
}

export { MyTasks };
