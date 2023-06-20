function TaskItem(props) {
  return (
    <li className="task-item">
      <span>{props.completed}</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { TaskItem };
