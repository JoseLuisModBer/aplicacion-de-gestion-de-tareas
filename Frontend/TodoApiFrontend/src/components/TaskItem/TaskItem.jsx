import './TaskItem.css';
import { useState } from 'react';

/*------------------------------------------------------*/

/*######################
### FUNCIÓN TASKITEM ###
######################*/

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
    onUpdate({
      id: task.id,
      title: updatedTitle,
      description: task.description,
      isCompleted: task.isCompleted,
    });
    setIsEditingTitle(false);
  };

  const handleSaveDescription = () => {
    onUpdate({
      id: task.id,
      title: task.title,
      description: updatedDescription,
      isCompleted: task.isCompleted,
    });
    setIsEditingDescription(false);
  };

  return (
    <div className={`tasks-container ${task.isCompleted ? 'completed' : ''}`}>
      <li className="task-container">
        <div className="checkbox-and-content">
          <div className="task-checkbox">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => onToggleComplete(task)}
            />
          </div>

          <div className="task-content">
            {/* Título editable */}
            {isEditingTitle ? (
              <div className="contenido-a-editar">
                <input
                  type="text"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  autoFocus
                />
                <button onClick={handleSaveTitle}>Guardar</button>
                <button onClick={handleToggleTitleEdit}>Cancelar</button>
              </div>
            ) : (
              <div className="contenido-sin-editar">
                <span
                  style={{
                    textDecoration: task.isCompleted ? 'line-through' : 'none',
                  }}
                >
                  {task.title}
                </span>
                <button onClick={handleToggleTitleEdit}>Editar</button>
              </div>
            )}

            {/* Descripción editable */}
            {isEditingDescription ? (
              <div className="contenido-a-editar">
                <textarea
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                  autoFocus
                />
                <button onClick={handleSaveDescription}>Guardar</button>
                <button onClick={handleToggleDescriptionEdit}>Cancelar</button>
              </div>
            ) : (
              <div className="contenido-sin-editar">
                <span
                  style={{
                    textDecoration: task.isCompleted ? 'line-through' : 'none',
                  }}
                >
                  {task.description}
                </span>
                <button onClick={handleToggleDescriptionEdit}>Editar</button>
              </div>
            )}
          </div>
        </div>

        <div className="task-errasebutton">
          {/* Botón para eliminar la tarea con confirmación de borrado para evitar borrar una tarea por accidente */}
          <button
            onClick={() => {
              if (
                window.confirm(
                  '¿Estás seguro de que quieres eliminar esta tarea?'
                )
              ) {
                onDelete(task.id);
              }
            }}
          >
            Eliminar
          </button>
        </div>
      </li>
    </div>
  );
};

export default TaskItem;
