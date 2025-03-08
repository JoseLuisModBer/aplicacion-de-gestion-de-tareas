using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApiBackend.Data;
using TodoApiBackend.Models;

namespace TodoApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly TodoContext _context;

        public TasksController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/tasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskItem>>> GetTasks()
        {
            return await _context.Tasks.ToListAsync();
        }

        // GET: api/tasks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItem>> GetTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound(new { message = $"No se encontró la tarea con ID {id}" });
            }
            return task;
        }

        // POST: api/tasks
        [HttpPost]
        public async Task<ActionResult<TaskItem>> PostTask(TaskItem task)
        {
            if (string.IsNullOrWhiteSpace(task.Title) || string.IsNullOrWhiteSpace(task.Description) || task.Description.Length < 10)
            {
                return BadRequest(new { message = "El título es obligatorio y la descripción debe tener al menos 10 caracteres." });
            }

            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTask), new { id = task.Id }, task);
        }

        // PUT: api/tasks/5 (Actualización parcial)
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(int id, TaskUpdateDto updatedTask)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound(new { message = $"No se encontró la tarea con ID {id}" });
            }

            // Actualizar el campo IsCompleted si se envió en la solicitud
            if (updatedTask.IsCompleted.HasValue)
            {
                task.IsCompleted = updatedTask.IsCompleted.Value;
            }

            // Actualizar el título y la descripción si se enviaron en la solicitud
            if (updatedTask.Title != null)
            {
                task.Title = updatedTask.Title;
            }
            if (updatedTask.Description != null)
            {
                task.Description = updatedTask.Description;
            }

            await _context.SaveChangesAsync();
            return Ok(task);
        }

        // DELETE: api/tasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound(new { message = $"No se encontró la tarea con ID {id}" });
            }

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
