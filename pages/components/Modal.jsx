import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Modal = (props) => {
  const router = useRouter();
  const { modalOpen, setModalOpen } = props;
  const [newTaskValue, setNewTaskValue] = useState('');
  const handleSubmitNewTodo = async (e) => {
    e.preventDefault();

    await addTodo({
      id: '8',
      text: newTaskValue,
    });

    setNewTaskValue('');
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className="modal-box relative">
        <label onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle absolute right-2 top-2">
          x
        </label>
        <form action="" onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new Task</h3>
          <div className="modal-action">
            <input value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
