using System.ComponentModel.DataAnnotations;

namespace TodoApiBackend.Models;

public class TaskItem
{
    public int Id { get; set; } // Aquí creo un identificador único para cada tarea.
    [Required(ErrorMessage = "El título es obligatorio.")] // Creo un mensaje de error en caso de intentar crear un tarea sin título.
    public string Title { get; set; } = string.Empty; // Título de la tarea. Añado = string.Empty para iniciar la propiedad con un string vacío en lugar de null y así evitar warnings al ejectuar dotnet run.
    [MinLength(10, ErrorMessage = "La descripción debe tener al menos 10 caracteres.")]
    public string Description { get; set; } = string.Empty; // Descripción de la tarea. También añado = string.Empty para evitar warnings.
    public bool IsCompleted { get; set; } = false; // Estado de la tarea (completada o no completada).
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow; // Fecha de creación de la tarea
}
