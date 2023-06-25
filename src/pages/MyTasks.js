import React, { useState } from 'react';
import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';
import { AddButton } from '../components/AddButton';
import { AddTaskModal } from '../components/AddTaskModal';

function MyTasks({ tasks, setTasks }) {
  //Add task modal
  const [activeAddTask, setActiveAddTask] = useState(false);
  return (
    <>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            repeat={task.repeat}
            date={task.date}
            important={task.important}
            notes={task.notes}
          />
        ))}
      </TaskList>
      <AddButton active={activeAddTask} setActive={setActiveAddTask} />
      <AddTaskModal
        tasks={tasks}
        setTasks={setTasks}
        show={activeAddTask}
        setShow={setActiveAddTask}
      />
    </>
  );
}

export { MyTasks };
