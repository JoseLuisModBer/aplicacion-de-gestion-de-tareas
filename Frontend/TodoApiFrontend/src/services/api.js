import axios from 'axios';

const API_URL = 'http://localhost:5229/api/tasks';

// Obtener todas las tareas
export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Crear una nueva tarea
export const createTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

// Actualizar una tarea
export const updateTask = async (id, taskData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, taskData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la tarea', error);
  }
};

// Eliminar una tarea
export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la tarea', error);
  }
};
