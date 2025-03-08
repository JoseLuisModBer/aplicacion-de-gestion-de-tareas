const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <li>
      <span
        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
      >
        {task.title} - {task.description}
      </span>
      <button onClick={() => onToggleComplete(task)}>
        {task.isCompleted ? 'Desmarcar' : 'Completar'}
      </button>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
