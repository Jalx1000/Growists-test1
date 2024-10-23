import fs from "fs";
import readline from "readline-sync";
import Task from "./class/Task.class.js";
import pc from "picocolors";

const Tasks = new Task();

// Navegacion entre los metodos de la clase TASK
function showMenu() {
  console.log(pc.bgBlack("\n--- Gestor de Tareas ---"));
  console.log("1. Añadir tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Listar tareas pendientes");
  console.log("5. Salir");
}

export default function init() {
  let opcion;
  do {
    showMenu();
    opcion = readline.question("Selecciona una opción: ");


    // dependiendo la entrada !5 hara algún método de la clase Task
    switch (opcion) {
      case "1":
        const tarea = readline.question("Introduce la tarea: ");
        Tasks.addTask(tarea);
        break;
      case "2":
        Tasks.showPendsTask();
        const indice =
          readline.questionInt("Introduce el número de la tarea a eliminar: ") -
          1;
        Tasks.deleteTask(indice);
        break;
      case "3":
        Tasks.showPendsTask();
        const value =
          readline.questionInt(
            "Introduce el número de la tarea a completar: "
          ) - 1;

        Tasks.completedTask(value);
        break;
      case "4":
        Tasks.showPendsTask();
        break;
      case "5":
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción no válida.");
    }
  } while (opcion !== "5");
}

init()