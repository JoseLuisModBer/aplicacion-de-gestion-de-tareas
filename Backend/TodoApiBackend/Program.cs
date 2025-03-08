using Microsoft.EntityFrameworkCore;
using TodoApiBackend.Data;

var builder = WebApplication.CreateBuilder(args);

// Agregar el contexto de la base de datos en memoria
builder.Services.AddDbContext<TodoContext>(options =>
    options.UseInMemoryDatabase("TodoDb"));

// Agregar controladores
builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers(); // Mapeamos los controladores

app.Run();
