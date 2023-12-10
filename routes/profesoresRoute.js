import { Router } from "express";
import * as Profesor from "../controllers/profesoresController.js";

const profesorRouter = Router();

// Ruta para obtener todos los profesores
profesorRouter.get("/", Profesor.getProfesores);

export default profesorRouter;
