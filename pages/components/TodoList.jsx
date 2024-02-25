import Task from './Task';

const TodoList = (props) => {
  const { tasks } = props;
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
