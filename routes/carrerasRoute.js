import { Router } from "express";
import * as Carrera from "../controllers/carrerasController.js";

const carreraRouter = Router();

// http://127.0.0.1:3000/carrera/
// Ruta para obtener todas las carreras
carreraRouter.get('/', Carrera.getCarreras); // READ

export default carreraRouter;
