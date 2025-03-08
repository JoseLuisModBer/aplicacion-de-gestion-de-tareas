using System.ComponentModel.DataAnnotations;

namespace TodoApiBackend.Models;

public class TaskItem
{
    public int Id { get; set; } // Identificador único
    [Required(ErrorMessage = "El título es obligatorio.")]
    public string Title { get; set; } // Título de la tarea
    [MinLength(10, ErrorMessage = "La descripción debe tener al menos 10 caracteres.")]
    public string Description { get; set; } // Descripción de la tarea
    public bool IsCompleted { get; set; } = false; // Estado de la tarea
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow; // Fecha de creación
}
