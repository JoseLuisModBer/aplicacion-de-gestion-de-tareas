import './Instructions.css';

const Instructions = () => {
  return (
    <div className="instructions-container">
      <div>
        <h2>INSTRUCCIONES EN ESPAÑOL:</h2>
        <h3>Descripcion de la app TaskList by ModBer:</h3>
        <ul className="instructions-ul">
          <li>App para hacer listas de tareas pendientes.</li>
          <li>
            Una tasklist fácil de usar, ideal para hacer la lista de la compra o
            apuntar tareas pendientes. Haz tu vida más fácil con tasklist by
            ModBer.
          </li>
        </ul>
        <h3>Funcionamiento:</h3>
        <p>
          Una vez abierta la app "TaskList by ModBer" siga los siguientes pasos:
        </p>
        <ol className="instructions-ol">
          <li>
            Inserte una nueva tarea en el input y pulse "Añadir tarea" para
            agregar dicha tarea a la lista.
          </li>
          <li>Verá como la tarea se añade en el contenedor inferior.</li>
          <li>
            Cada tarea cuenta con un botón tipo checkbox que puede pulsar para
            marcar o desmarcar dicha tarea como realizada o no.
          </li>
          <li>
            En caso de que usted inserte una tarea que desee borrar, basta con
            marcarla como realizada y luego pulsar el botón "Borrar realizadas".
          </li>
          <li>
            Finalmente puede pulsar el botón "Borrar tareas" para eliminar la
            lista de tareas (tanto las realizdas como las no realizadas).
          </li>
        </ol>
        <h3>Cómo guardar tus listas:</h3>
        <p>
          No se preocupe si cierra la aplicación, "TaskList by ModBer" guardará
          la lista de tareas creada hasta que usted pulse el botón "Borrar
          tareas", siempre y cuando abra la aplicación desde el mismo
          dispositivo y desde el mismo navegador (y siempre y cuando usted no
          borre las cookies).
        </p>
        {/**/}
        <h2 className="h2-english-instructions">ENGLISH INSTRUCTIONS:</h2>
        <h3>Description of the TaskList by ModBer app:</h3>
        <ul className="instructions-ul">
          <li>App to make to-do lists.</li>
          <li>
            An easy-to-use tasklist, ideal for making a shopping list or writing
            down pending tasks. Make your life easier with tasklist by ModBer.
          </li>
        </ul>
        <h3>Functioning:</h3>
        <p>Once the "TaskList by ModBer" app is open, follow these steps:</p>
        <ol className="instructions-ol">
          <li>
            Insert a new task in the input and click "Add task" to add that task
            to the list.
          </li>
          <li>You will see how the task is added in the lower container.</li>
          <li>
            Each task has a checkbox type button that you can click to mark or
            unmark said task as done or not.
          </li>
          <li>
            In case you insert a task that you want to delete, just mark it as
            done and then press the "Delete done" button.
          </li>
          <li>
            Finally you can press the "Delete tasks" button to delete the list
            of tasks (both those done and those not done).
          </li>
        </ol>
        <h3>How to save your lists:</h3>
        <p>
          Don't worry if you close the app, "TaskList by ModBer" will save the
          created task list until you press the "Clear Tasks" button, as long as
          you open the app from the same device and from the same browser (and
          as long as you you do not delete cookies).
        </p>
      </div>
    </div>
  );
};

export default Instructions;
