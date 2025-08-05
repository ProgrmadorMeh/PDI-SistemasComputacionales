// routes/tareas.routes.js

import { Router } from "express";
import prisma from "../lib/prisma.js";

const router = Router();


router.get("/", async (req, res) => {
  try {
    const { titulo } = req.query;
    const tareas = await prisma.tarea.findMany({
      where: titulo
        ? {
            titulo: {
              contains: titulo,
              mode: "insensitive",
            },
          }
        : {},
    });
    res.json(tareas);
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
  }
});


router.get("/:id", async (req, res) => {
  try{
    const tareas = await prisma.tarea.findFirst({
    where: {
      id: parseInt(req.params.id)
    }
  });
  res.json(tareas);
  } catch (error) {
    console.error("Error al obtener la tarea:", error);
  }
});


router.post("/", async (req, res) => {
  try{
    const { titulo, descripcion, path } = req.body;
    const tarea = await prisma.tarea.create({
      data: {
        titulo,
        descripcion,
        path,
      },
    });
    res.json(tarea);
  } catch (error) {
    console.error("Error al crear la tarea:", error);
  }
})

router.put("/:id", async (req, res) => {
  try{
    const { titulo, descripcion, path } = req.body;
    const tarea = await prisma.tarea.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: {
        titulo,
        descripcion,
        path,
      },
    });
    res.json(tarea);
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
  }
});

router.delete("/:id", async (req, res) => {
  try{
    await prisma.tarea.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.json("Eliminado correctamente");
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
  }
});

export default router;
