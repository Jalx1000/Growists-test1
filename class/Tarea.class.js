export default class Task {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push({ task, completada: false });
    console.log("Tarea añadida correctamente.");
    this.saveTasks();
  }
  deleteTask(index) {
    // Verifica si el indice es !0 y indice < que la longitud de task
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1); // aquí se elimina la tarea dentro de task
      console.log(pc.bgRed("Tarea eliminada."));
      this.showPendsTask();
      this.saveTasks();
    } else {
      console.log("Índice inválido.");
    }
  }
  completedTask(index) {
    // Verifica si el indice es !0 y indice < que la longitud de task
    if (indice >= 0 && indice < this.tareas.length) {
      // Marcamos como completada la tarea que corresponde al índice recibido.
      this.tareas[indice].completada = true;
      console.log("Tarea marcada como completada.");
      this.saveTasks();
    } else {
      console.log("Índice inválido.");
    }
  }
  showPendsTask() {}
  saveTask() {}
}
