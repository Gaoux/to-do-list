import React, { useState } from 'react';
import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';
import { AddTaskButton } from '../components/AddTaskButton';
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
            date={task.date}
            important={task.important}
            notes={task.notes}
          />
        ))}
      </TaskList>
      <AddTaskButton active={activeAddTask} setActive={setActiveAddTask} />
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
