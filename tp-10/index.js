import express from "express";
import tareasRouter from "./routes/tareas.routes.js";

const app = express();
const port = 3000;

app.use(express.json()); // Para poder recibir JSON en req.body

// Usa el router con un prefijo /api (puedes cambiarlo)
app.use("/trabajo", tareasRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
