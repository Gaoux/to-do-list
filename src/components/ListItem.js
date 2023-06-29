import React from 'react';

function ListItem(props) {
  let percentageOfTaskCompleted;
  if (props.nTasks === 0) {
    percentageOfTaskCompleted = 0;
  } else {
    percentageOfTaskCompleted = (
      (props.nTasksCompleted / props.nTasks) *
      100
    ).toFixed();
  }
  const setBarColor = (percentage) => {
    if (percentage < 25) {
      return '#d2122e';
    } else if (percentage < 50) {
      return 'orange';
    } else if (percentage < 75) {
      return 'yellow';
    } else if (percentage < 100) {
      return '#3168e0';
    } else {
      return '#4bf765';
    }
  };

  let barColor = setBarColor(percentageOfTaskCompleted);

  const barStyle = {
    backgroundColor: barColor,
    width: percentageOfTaskCompleted + '%',
  };
  return (
    <div
      className="list-item rounded overflow-hidden shadow-lg "
      onClick={props.openInfo}
    >
      <div className="px-6 py-4">
        <p className="n-tasks text-base">{props.nTasks} tasks</p>
        <div className="name font-bold text-xl mb-2">{props.name}</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-600 h-2.5 rounded-full" style={barStyle}></div>
        </div>
      </div>
    </div>
  );
}

export { ListItem };
