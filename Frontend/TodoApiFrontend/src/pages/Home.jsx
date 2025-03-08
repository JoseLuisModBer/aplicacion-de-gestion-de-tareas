import { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

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
    loadTasks(); // Si prefieres recargar todas las tareas después de actualizar
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    loadTasks(); // Recargar todas las tareas después de eliminar
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm onCreate={handleCreateTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
