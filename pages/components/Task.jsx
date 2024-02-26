'use client';

import { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { IoCheckboxOutline } from 'react-icons/io5';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '@/api';

const Task = (props) => {
  const { task } = props;
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(task.text);

  const handleSubmitEditTodo = async (e) => {
    e.preventDefault();

    await editTodo({
      id: task.id,
      text: taskToEdit,
      completed: false,
    });

    setTaskToEdit('');
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };

  const handleTaskCompleted = async () => {
    await editTodo({
      id: task.id,
      text: task.text,
      completed: (task.completed = true),
    });
  };

  return (
    <tr key={task.id}>
      <td className={`w-full ${task.completed ? 'line-through' : ''}`}>{task.text}</td>
      {/* <td>{task.completed ? 'Yes' : 'No'}</td> */}
      <td className="flex gap-5">
        <IoCheckboxOutline onClick={handleTaskCompleted} cursor={'pointer'} className={`text-green-500 ${task.completed ? 'hidden' : ''}`} size={27} />

        <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className={`text-blue-500 ${task.completed ? 'hidden' : ''}`} size={25} />

        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit Task</h3>
            <div className="modal-action">
              <input value={taskToEdit} onChange={(e) => setTaskToEdit(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>

        <FiTrash2 onClick={() => setOpenModalDeleted(true)} cursor="pointer" className="text-red-500" size={25} />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className="text-lg">Are you sure, you want to delete this task?</h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
