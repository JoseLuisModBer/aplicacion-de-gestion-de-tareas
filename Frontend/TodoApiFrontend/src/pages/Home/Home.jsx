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

/*------------------------------------------------------*/

/*##################
### FUNCIÓN HOME ###
##################*/

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

  const handleUpdateTask = async (updatedTask) => {
    const updated = await updateTask(updatedTask.id, updatedTask); // Backend devuelve la tarea actualizada

    // Actualizar solo esa tarea en el estado sin recargar todas
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updated.id ? updated : task))
    );
  };

  const handleToggleComplete = async (task) => {
    const updated = await updateTask(task.id, {
      ...task,
      isCompleted: !task.isCompleted,
    });
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === updated.id ? updated : t))
    );
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="home-container">
      <h1>Crea una nueva tarea</h1>
      <TaskForm onCreate={handleCreateTask} />
      <div className="tasks">
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
    </div>
  );
};

export default Home;
