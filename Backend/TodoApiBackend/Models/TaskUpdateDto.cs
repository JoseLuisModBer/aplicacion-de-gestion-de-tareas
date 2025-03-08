//Código para hacer que las peticiones PUT se puedan realizar sin que se exija modificar tanto el título como la descripción como el isCompleted
namespace TodoApiBackend.Models
{
    public class TaskUpdateDto
    {
        public string? Title { get; set; } // Opcional
        public string? Description { get; set; } // Opcional
        public bool? IsCompleted { get; set; } // Opcional
    }
}
