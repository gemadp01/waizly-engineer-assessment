import { useState } from 'react';
import Task from './Task';
import { searchTaskByName } from '@/api';

const TodoList = (props) => {
  const { tasks } = props;
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async (taskName) => {
    try {
      const result = await searchTaskByName(taskName);
      setSearchResult(result);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  const dataToDisplay = searchResult ? searchResult : tasks;

  return (
    <div className="overflow-x-auto">
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <table className="table">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
