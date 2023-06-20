// import '../assets/styles/TaskCounter.css';

function TaskCounter({ completed, total }) {
  return (
    <h1>
      Completed {completed} of {total} Tasks
    </h1>
  );
}

export { TaskCounter };
