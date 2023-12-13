//ste módulo establece la ruta para obtener todos los profesores y 
//utiliza el controlador Profesor.getProfesores para manejar esa solicitud específica

import { Router } from "express";
import * as Profesor from "../controllers/profesoresController.js";

const profesorRouter = Router();

// Ruta para obtener todos los profesores
profesorRouter.get("/", Profesor.getProfesores);

export default profesorRouter;
