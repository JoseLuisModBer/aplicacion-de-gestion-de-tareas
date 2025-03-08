using System;

namespace TodoApiBackend.Models;

public class TaskItem
{
    public int Id { get; set; } // Identificador único
    public string Title { get; set; } = string.Empty; // Título de la tarea
    public string Description { get; set; } = string.Empty; // Descripción de la tarea
    public bool IsCompleted { get; set; } = false; // Estado de la tarea
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow; // Fecha de creación
}
