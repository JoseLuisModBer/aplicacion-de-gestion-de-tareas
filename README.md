# Nombre del Proyecto

"Aplicación de Gestión de Tareas creada por José Luis Modroño Berdiñas para Cwellt".

## Índice

- [Instrucciones para ejecutar el proyecto localmente](#instrucciones-para-ejecutar-el-proyecto-localmente)
- [Descripción del Backend](#descripción-del-backend)
- [Descripción del Frontend](#descripción-del-frontend)
- [Lenguajes usados](#lenguajes-usados)
- [Información sobre el autor](#información-sobre-eñ-autor)

## Instrucciones para ejecutar el proyecto localmente

- Copiar el SSH del [respositorio de GITHUB](https://github.com/JoseLuisModBer/aplicacion-de-gestion-de-tareas)
- Crear una carpeta en tu PC.
- Posicionarse en la carpeta con el terminal e introducir el siguiente comando

```
git clone git@github.com:JoseLuisModBer/aplicacion-de-gestion-de-tareas.git
```

- Tras hacer esto veremos que en la carpeta en cuestión habrá tres archivos:
  - Un archivo oculto .git (necesario para GitHub).
  - Una carpeta llamada "Backend".
  - Una carpeta llamada "Frontend".

### Para ejecutar el Backend haremos lo siguiente:

- Dentro de la carpeta "Backend" hay una carpeta llamada "TodoApiBackend". Nos posicionaremos en ella udando el terminal y ejecutaremos el siguiente comando para poner en escucha el servidor:

```
//En caso de ser necesario instalar dependencias ejecutaremos previamente: dotnet restore
dotnet run

```

- Ahora ya podremos ejecutar el frontend y que funcione correctameente usando las bases de datos.
- Adicionalmente en la carpeta "Backend" hay un carpeta llamada "Colección de Postman" que contiene un archivo llamado "" que podemos importar al programa Postman. Este contiene las 5 peticiones que podemos ejecutar para probar el Backend:
  - **GET-api-tasks** | Esta petición sirve para mostrar las tareas creadas.
  - **GET-api-tasks-id** | Esta petición sirve para mostrar una petición en concreto. Para ello filtraremos por su id en la url.
  - **POST-api-tasks** | Esta petición sirve para crear una tarea. Para ello se crearán los campos title y description ya que la fecha se creará automáticamente y el isCompleted por defecto será false al crear una tarea.
  - **PUT-api-tasks-id** | Esta petición sirve para modificar una tarea ya creada. Para ello filtraremos por su id en la url. Además enviaremos los campos que queremos modificar (title, description y/o isCompleted).
  - **DELETE-api-tasks-id** | Esta petición sirve para eliminar una tarea. Para ello filtraremos por su id en la url.

### Para ejecutar el Frontend haremos lo siguiente:

- Dentro de la carpeta "Frontend" hay una carpeta llamada "TodoApiFrontend". Nos posicionaremos en ella udando el terminal y ejecutaremos los siguientes comandos:

```
npm i
```

- Con npm i o npm install, se creará la carpeta "node_modules" y se instalarán en ella todas las dependencias necesarias para hacer que el proyecto funcione.

```
npm run dev
```

- Con npm run dev generaremos un enlace que, al pulsarlo, abrirá el proyecto en una pestaña de tu navegador. Tras este paso ya podremos utilizar la aplicación.

## Descripción del Backend

### En cuanto a la configuración inicial y los módulos utilizados:

- He creado el proyecto backend mediante el comando:

```
dotnet new webapi -o TodoApiBackend
```

- Esto me ha permitido generar una plantilla básica de API en C# utilizando ASP.NET Core.
- he instalado el paquete Microsoft.EntityFrameworkCore.InMemory mediante el siguiente comando:

```
dotnet add package Microsoft.EntityFrameworkCore.InMemory

```

### En cuanto a la estructura de carpetas y archivos:

- En la raiz del proyecto tengo el archivo **Program.cs** para agregar el contexto de la DB en memoria, agregar los controladores, configurar CORS y manejar excepciones.
- En la carpeta **"CONTROLLERS"**, he creado el controlador principal **TaskController.cs**, que contiene las rutas necesarias para manejar las peticiones anteriormente comentadas (y que pueden ser testeadas con POSTMAN):
- En la carppeta **"DATA"** he creado el archivo **TodoContext.cs** para definir el contexto de la base de datos.
- En la carpeta **"MODELS"** he creado dos archivos:
  - **"TaskForm.cs":** para crear el id de cada tarea, su título y descripción (con manejo de errores) el campo isCompleted y la fecha de creación.
  - **"TaskUpdateDto.cs":** para hacer que las peticiones PUT se puedan realizar para cambios puntuales, sin que se exija modificar tanto el título como la descripción como el isCompleted.

## Descripción del Frontend

### En cuanto a la configuración inicial y los módulos utilizados:

- He decidido crear el proyecto con npm create vite@latest

```
npm create vite@latest
```

- En la configuración de VITE he elegido React como framework y JavaScript en vez de TypeScript porque me manejo mejor. En el pasado he usado TypeScript pero he preferido decantarme por JavaScript para ganar en soltura y dedicar mis esfuerzos a la parte de Backend que me va a resultar más exigente.
- He ejecutado npm install axios para hacer peticiones a la API.
- He ejecutado npm install react react-dom y npm install --save react-router-dom para poder crear en App.jsx el enrutamiento necesario para poder hacer un header interactivo que me permita cargar pas páginas Home.jsx e Instructions.jsx. Además, apado por seguridad la siguiente ruta para hacer que si se carga cualquier otra url, lleve a la página Home.jsx:

```
<Route path="*" element={<Home />} />
```

### En cuanto a la estructura de carpetas y archivos:

- En SRC, he configurado los archivos main.jsx y App.jsx
  - En main.jsx dirijo a App.jsx pero aplicando BrowserRouter.
  - En App.jsx he insertado el Header.jsx y el Footer.jsx y he creado el enrutamiento para dirigir a Home.jsx e Instrucciones.jsx según el caso.
- En SRC, he creado tres carpetas dentro de SRC:
  - **"components"**, a su vez contiene cuatro carpetas:
    - **"Footer":** que contiene Footer.jsx y Footer.css
    - **"Header":** que contiene Header.jsx e Header.css
    - **"TaskForm":** que contiene TaskForm.jsx y TaskForm.css
    - **"TaskItem":** que contiene TaskItem.jsx e TaskItem.css
  - **"pages"**, a su vez contiene dos carpetas:
    - **"Home":** que contiene Home.jsx y Home.css
    - **"Instructions":** que contiene Instructions.jsx e Instructions.css
  - **"services"** para las llamadas a la API (api.js).

## Lenguajes y herramientas usados

### Lenguajes:

- HTML
- CSS
- JavaScript
- JSX (React)
- C#
- JSON (para configuraciones secundarias)
- Markdown (para la creación del README.md)

### Herramientas:

- Vite
- npm (para la gestión de paquetes)
- .NET Core/ASP.NET Core

## Información sobre el autor

Este proyecto ha sido desarrollado por Jose Luis Modroño Berdiñas (ModBer) en Marzo de 2025.

- Visita mi repositorio de [GITHUB](https://github.com/JoseLuisModBer).
- Visita mi perfil de [LINKEDIN](https://www.linkedin.com/in/joseluismodro%C3%B1oberdi%C3%B1as/).
