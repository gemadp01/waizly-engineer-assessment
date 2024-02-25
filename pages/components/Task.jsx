import { FiEdit, FiTrash2 } from 'react-icons/fi';

const Task = (props) => {
  const { task } = props;
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      {/* <td>{task.completed ? 'Yes' : 'No'}</td> */}
      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}></Modal>
      <td className="flex gap-5">
        <FiEdit cursor="pointer" className="text-blue-500" size={25} />
        <FiTrash2 cursor="pointer" className="text-red-500" size={25} />
      </td>
    </tr>
  );
};

export default Task;
