import { Router } from "express";
import * as Curso from "../controllers/cursosController.js";

const cursoRouter = Router();

// Ruta para obtener todos los cursos
cursoRouter.get("/", Curso.getCursos);

export default cursoRouter;
