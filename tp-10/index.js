import express from "express";
import tareasRouter from "./routes/tareas.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/trabajo", tareasRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

