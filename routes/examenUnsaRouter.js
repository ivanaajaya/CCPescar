import { Router } from "express";
import * as ExamenUnsa from "../controllers/examenUnsaController.js";

const examenUnsaRouter = Router();

// Ruta para obtener todos los exámenes
examenUnsaRouter.get("/", ExamenUnsa.getExamenesUnsaall); // READ todos

// // Ruta para obtener exámenes por carrera
// examenUnsaRouter.get("/carrera/:carreraTitle?", ExamenUnsa.getExamenesUnsaByCarrera);

export default examenUnsaRouter;
