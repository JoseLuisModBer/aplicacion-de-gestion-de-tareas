import './Instructions.css';

/*------------------------------------------------------*/

/*##########################
### FUNCIÓN INSTRUCTIONS ###
##########################*/

const Instructions = () => {
  return (
    <div className="instructions-container">
      <div>
        <h2>INSTRUCCIONES DE USO:</h2>
        <h3>Descripcion de la aplicación:</h3>
        <ul className="instructions-ul">
          <li>App para hacer listas de tareas pendientes.</li>
          <li>
            Una tasklist fácil de usar, ideal para hacer la lista de la compra o
            apuntar tareas pendientes.
          </li>
        </ul>
        <h3>Funcionamiento:</h3>
        <p>Una vez abierta la app, siga los siguientes pasos:</p>
        <ol className="instructions-ol">
          <li>
            Inserte el título y la descripción de una nueva tarea en sus
            correspondientes casillas.
          </li>
          <li>
            Pulse el botón "Agregar tarea" para agregar dicha tarea a la lista.
          </li>
          <li>Verá como la tarea se añade más abajo.</li>
          <li>
            Cada tarea cuenta con un botón tipo checkbox que puede pulsar para
            marcar o desmarcar dicha tarea como realizada o no.
          </li>
          <li>
            Puede corregir tanto el título como la descripción de una tarea
            pulsando en el botón "Editar" que figura junto a cada campo.
          </li>
          <li>
            En caso de que usted inserte una tarea que desee borrar, basta con
            pulsar el botón "Eliminar" de la tarea en cuestión.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Instructions;
