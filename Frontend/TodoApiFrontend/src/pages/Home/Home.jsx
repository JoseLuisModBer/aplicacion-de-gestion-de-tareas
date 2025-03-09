import './Home.css';
import { useEffect, useState } from 'react';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../../services/api';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // Cargar las tareas cuando el componente se monta
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleCreateTask = async (task) => {
    const createdTask = await createTask(task); // Obtener la tarea creada desde la respuesta
    setTasks((prevTasks) => [...prevTasks, createdTask]); // Agregarla al estado de tareas
  };

  const handleToggleComplete = async (task) => {
    await updateTask(task.id, { isCompleted: !task.isCompleted });
    loadTasks(); // Recargar todas las tareas después de actualizar
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    loadTasks(); // Recargar todas las tareas después de eliminar
  };

  const handleUpdateTask = async (updatedTask) => {
    await updateTask(updatedTask.id, updatedTask); // Realiza la actualización en el backend
    loadTasks(); // Recargar las tareas para mostrar los cambios
  };

  return (
    <div className="home-container">
      <h1>Crea una nueva tarea</h1>
      <TaskForm onCreate={handleCreateTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask} // Pasa la función para actualizar
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
