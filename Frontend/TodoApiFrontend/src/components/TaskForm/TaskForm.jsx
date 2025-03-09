import './TaskForm.css';
import { useState } from 'react';

const TaskForm = ({ onCreate }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || task.description.length < 10) {
      alert(
        'El título es obligatorio y la descripción debe tener al menos 10 caracteres.'
      );
      return;
    }
    onCreate(task); // Enviar la tarea para ser creada
    setTask({ title: '', description: '' }); // Limpiar el formulario
  };

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={task.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={task.description}
          onChange={handleChange}
        />
        <button className="form-button" type="submit">
          Agregar Tarea
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
