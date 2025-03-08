using Microsoft.EntityFrameworkCore;
using TodoApiBackend.Data;

var builder = WebApplication.CreateBuilder(args);

// Agregar el contexto de la base de datos en memoria
builder.Services.AddDbContext<TodoContext>(options =>
    options.UseInMemoryDatabase("TodoDb"));

// Agregar controladores
builder.Services.AddControllers();

// Agregar y configurar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("http://localhost:5173") // URL de tu frontend
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

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

// Usar CORS en la aplicación
app.UseCors("AllowSpecificOrigin");  // Aplicar la política CORS

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // Mapeamos los controladores

app.Run();
