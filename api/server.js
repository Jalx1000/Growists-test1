import express from "express";
import Task from "../class/Task.class.js";
const app = express();
const PORT = process.env.PORT || 3000; // Puedes cambiar el puerto si es necesario
const task = new Task();
// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta de ejemplo
app.get("/tareas", (req, res) => {
  res.send(task.tasks);
});

app.get("/tarea/:id", (req, res) => {
  res.send(task.showTask(req.params.id));
});

app.post("/tarea/:nombre", (req, res) => {
  res.send(task.addTask(req.params.nombre));
});

app.put("/tarea/:id", (req, res) => {
  res.send(task.completedTask(req.params.id));
});

app.delete("/tarea/:id", (req, res) => {
  res.send(task.deleteTask(req.params.id));
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
