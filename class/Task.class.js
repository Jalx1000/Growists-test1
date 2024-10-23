import fs from "fs";
import pc from "picocolors";

export default class Task {
  constructor() {
    this.tasks = [];
    if (fs.existsSync("tasks.txt")) {
      const data = fs.readFileSync("tasks.txt", "utf8");
      this.tasks = JSON.parse(data);
    }
  }
  addTask(task) {
    this.tasks.push({ task, completed: false });
    console.log("Tarea añadida correctamente.");
    this.saveTask();
  }
  deleteTask(index) {
    // Verifica si el indice es !0 y indice < que la longitud de task
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1); // aquí se elimina la tarea dentro de task
      console.log(pc.bgRed("Tarea eliminada."));
      this.showPendsTask();
      this.saveTask();
    } else {
      console.log("Índice inválido.");
    }
  }
  completedTask(index) {
    // Verifica si el indice es !0 y indice < que la longitud de task
    if (index >= 0 && index < this.tasks.length) {
      // Marcamos como completed la tarea que corresponde al índice recibido.
      this.tasks[index].completed = true;
      console.log("Tarea marcada como completada.");
      this.saveTask();
      this.showPendsTask();
    } else {
      console.log(pc.bgRed("Índice inválido."));
    }
  }
  showPendsTask() {
    console.log("\n--- Tareas Pendientes ---");
    this.tasks.forEach((task, index) => {
      if (!task.completed) console.log(pc.red(`${index + 1}. ${task.task}`));
      if (task.completed)
        console.log(
          pc.green(`${index + 1}. ${task.task} -- completada 👌`) + ""
        );
    });
  }

  saveTask() {
    fs.writeFileSync("tasks.txt", JSON.stringify(this.tasks, null, 2));
  }
}
