using Microsoft.EntityFrameworkCore;
using TodoApiBackend.Data;

var builder = WebApplication.CreateBuilder(args);

// Agrego el contexto de la base de datos en memoria
builder.Services.AddDbContext<TodoContext>(options =>
    options.UseInMemoryDatabase("TodoDb"));

// Agrego controladores
builder.Services.AddControllers();

// Agrego y configuro CORS
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

// Uso de CORS en la aplicación
app.UseCors("AllowSpecificOrigin");

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
