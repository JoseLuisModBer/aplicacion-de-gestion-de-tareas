using Microsoft.EntityFrameworkCore;
using TodoApiBackend.Data;

var builder = WebApplication.CreateBuilder(args);

// Agregar el contexto de la base de datos en memoria
builder.Services.AddDbContext<TodoContext>(options =>
    options.UseInMemoryDatabase("TodoDb"));

// Agregar controladores
builder.Services.AddControllers();

var app = builder.Build();

// Middleware global para manejar excepciones
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";

        var errorResponse = new { message = "Ha ocurrido un error interno en el servidor." };
        await context.Response.WriteAsJsonAsync(errorResponse);
    });
});

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // Mapeamos los controladores

app.Run();
