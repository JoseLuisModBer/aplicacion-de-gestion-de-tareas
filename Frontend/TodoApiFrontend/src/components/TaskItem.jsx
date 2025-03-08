import { useState } from 'react';

const TaskItem = ({ task, onToggleComplete, onDelete, onUpdate }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );

  const handleToggleTitleEdit = () => {
    setIsEditingTitle(!isEditingTitle);
  };

  const handleToggleDescriptionEdit = () => {
    setIsEditingDescription(!isEditingDescription);
  };

  const handleSaveTitle = () => {
    // Actualizamos el título
    onUpdate({
      id: task.id,
      title: updatedTitle,
      description: task.description,
      isCompleted: task.isCompleted,
    });
    setIsEditingTitle(false);
  };

  const handleSaveDescription = () => {
    // Actualizamos la descripción
    onUpdate({
      id: task.id,
      title: task.title,
      description: updatedDescription,
      isCompleted: task.isCompleted,
    });
    setIsEditingDescription(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggleComplete(task)}
      />

      {/* Título editable */}
      {isEditingTitle ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button onClick={handleSaveTitle}>Guardar</button>
          <button onClick={handleToggleTitleEdit}>Cancelar</button>
        </div>
      ) : (
        <div>
          <span
            style={{
              textDecoration: task.isCompleted ? 'line-through' : 'none',
            }}
          >
            {task.title}
          </span>
          <button onClick={handleToggleTitleEdit}>Editar Título</button>
        </div>
      )}

      {/* Descripción editable */}
      {isEditingDescription ? (
        <div>
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleSaveDescription}>Guardar</button>
          <button onClick={handleToggleDescriptionEdit}>Cancelar</button>
        </div>
      ) : (
        <div>
          <span
            style={{
              textDecoration: task.isCompleted ? 'line-through' : 'none',
            }}
          >
            {task.description}
          </span>
          <button onClick={handleToggleDescriptionEdit}>
            Editar Descripción
          </button>
        </div>
      )}

      {/* Botón para eliminar la tarea */}
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
