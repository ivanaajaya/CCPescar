import { Router } from "express";
import * as ExamenUnsa from "../controllers/examenUnsaController.js";

const examenUnsaRouter = Router();

// Ruta para obtener todos los exámenes
examenUnsaRouter.get('/', ExamenUnsa.getExamenesUnsaall); // READ todos
// examenUnsaRouter.get('/:id?', ExamenUnsa.getExamenesUnsa); // READ algunos
export default examenUnsaRouter;
