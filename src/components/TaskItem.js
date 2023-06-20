function TaskItem(props) {
  return (
    <li className="task-item">
      <span>{props.completed}</span>
      <p>{props.text}</p>
      {/* <figure className={Favorite ? 'favorite' : ''}>
        <FontAwesomeIcon
          className="star-icon"
          icon={Favorite ? solidFaStar : faStar}
          onClick={handleStarClick}
        />
      </figure> */}
    </li>
  );
}

export { TaskItem };
