import { Router } from "express";
import * as ExamenUnsa from "../controllers/examenUnsaController.js";

const examenUnsaRouter = Router();

// Ruta para obtener todos los exámenes
examenUnsaRouter.get('/', ExamenUnsa.getExamenesUnsa); // READ

export default examenUnsaRouter;
