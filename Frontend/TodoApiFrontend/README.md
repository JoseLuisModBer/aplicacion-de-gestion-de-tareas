# Nombre del Proyecto

"Aplicación de Gestión de Tareas creada por José Luis Modroño Berdiñas para Cwellt".

## Índice

- [Instrucciones para ejecutar el proyecto localmente](#instrucciones-para-ejecutar-el-proyecto-localmente)
- [Descripción del Backend](#descripción-del-backend)
- [Descripción del Frontend](#descripción-del-frontend)
- [Lenguajes usados](#lenguajes-usados)
- [Información sobre el autor](#información-sobre-eñ-autor)

## Instrucciones para ejecutar el proyecto localmente

- Copiar el SSH del respositorio de GITHUB
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

- Con npm i o npm install, instalararemos todo lo necesario para hacer que el proyecto funcione.

```
npm run dev
```

- Con npm run dev generaremos un enlace que, al pulsarlo, abrirá el proyecto en una pestaña de tu navegador. Tras este paso ya podremos utilizar la aplicación.

## Descripción del Backend

- x

## Descripción del Frontend

### En cuanto a la configuración inicial y los módulos utilizados:

- He decidido crear el proyecto con npm create vite@latest utilizando React como framework y JavaScript en vez de TypeScript porque me manejo mejor. En el pasado he usado TypeScript pero he preferido decantarme por JavaScript para ganar en soltura y dedicar mis esfuerzos a la parte de Backend que me va a resultar más exigente.
- He ejecutado npm install axios para hacer peticiones a la API.

### En cuanto a la estructura de carpetas y archivos:

- En SRC, he configurado los archivos main.jsx y App.jsx
  - En main.jsx
  - En App.jsx he optado simplemente por importar la página Home.jsx para poder redirigir a ella.
- En SRC, he creado tres carpetas dentro de SRC:
  - "components" para los componentes reautilizables (TaskForm.jsx y TaskItem.jsx).
  - "pages" para páginas como Home.jsx.
  - "services" para las llamadas a la API (api.js).

## Lenguajes usados

- React
- Javascript

## Información sobre el autor

Este proyecto ha sido desarrollado por Jose Luis Modroño Berdiñas (ModBer) en Marzo de 2025.

- Visita mi repositorio de [GITHUB](https://github.com/JoseLuisModBer).
- Visita mi perfil de [LINKEDIN](https://www.linkedin.com/in/joseluismodro%C3%B1oberdi%C3%B1as/).
