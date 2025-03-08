using Microsoft.EntityFrameworkCore;
using TodoApiBackend.Models;

namespace TodoApiBackend.Data;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options) : base(options) { }

    public DbSet<TaskItem> Tasks { get; set; } = null!;
}
